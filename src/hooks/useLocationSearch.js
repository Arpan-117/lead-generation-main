import { useEffect, useState } from 'react';

/**
 * HOOK — useLocationSearch
 * Debounced city/country suggestions from the Geoapify Autocomplete API.
 * Needs VITE_GEOAPIFY_KEY in .env. Without a key it returns no suggestions,
 * so the field still works as plain free text.
 */
const API_KEY = import.meta.env.VITE_GEOAPIFY_KEY;
const ENDPOINT = 'https://api.geoapify.com/v1/geocode/autocomplete';
const MIN_CHARS = 3;
const DEBOUNCE_MS = 350;
const cache = new Map();

if (import.meta.env.DEV && !API_KEY) {
  console.warn('[useLocationSearch] VITE_GEOAPIFY_KEY is not set — location suggestions are disabled.');
}

function toLabel(r) {
  const parts = [r.city || r.name, r.state, r.country].filter(Boolean);
  const unique = [...new Set(parts)];
  return unique.length ? unique.join(', ') : r.formatted;
}

export function useLocationSearch(query, enabled = true) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim();

    if (!enabled || !API_KEY || q.length < MIN_CHARS) {
      setResults([]);
      setLoading(false);
      return;
    }

    const key = q.toLowerCase();
    if (cache.has(key)) {
      setResults(cache.get(key));
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const url = `${ENDPOINT}?text=${encodeURIComponent(q)}&type=city&format=json&limit=6&apiKey=${API_KEY}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Location lookup failed (${res.status})`);
        const data = await res.json();
        const labels = [...new Set((data.results || []).map(toLabel).filter(Boolean))];
        cache.set(key, labels);
        setResults(labels);
      } catch (err) {
        if (err.name !== 'AbortError') setResults([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, enabled]);

  return { results, loading };
}