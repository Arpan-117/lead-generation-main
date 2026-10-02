import { useState } from 'react';
import { cn } from '../lib/cn';
import { useLocationSearch } from '../hooks/useLocationSearch';

/**
 * MOLECULE — LocationField
 * Type-ahead combobox for "City, Country". Suggestions are optional:
 * whatever the user types is kept as the value, so a failed lookup never blocks the form.
 */
export function LocationField({ label, name, value, onChange, placeholder, required = false, error }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const { results, loading } = useLocationSearch(value, open);

  const listId = `${name}-listbox`;
  const errorId = `${name}-error`;
  const showList = open && (loading || results.length > 0);

  const select = (text) => {
    onChange(text);
    setOpen(false);
    setActive(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!open || results.length === 0) {
      if (e.key === 'ArrowDown') setOpen(true);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault();
      select(results[active]);
    }
  };

  return (
    <div className="mol-form-group">
      <label htmlFor={name} className="atom-form-label">
        {label}
        {required && <span className="atom-form-required" aria-hidden="true">*</span>}
      </label>
      <div className="mol-location">
        <input
          id={name}
          name={name}
          type="text"
          role="combobox"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={(e) => { onChange(e.target.value); setOpen(true); setActive(-1); }}
          onFocus={() => value.trim().length >= 3 && setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={handleKeyDown}
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${name}-opt-${active}` : undefined}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn('atom-input', error && 'atom-input--error')}
        />
        {showList && (
          <ul id={listId} role="listbox" className="mol-location__list">
            {results.length === 0 && loading && (
              <li className="mol-location__status">Searching…</li>
            )}
            {results.map((text, i) => (
              <li
                key={text}
                id={`${name}-opt-${i}`}
                role="option"
                aria-selected={i === active}
                className={cn('mol-location__option', i === active && 'mol-location__option--active')}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActive(i)}
                onClick={() => select(text)}
              >
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p id={errorId} className="atom-form-error" role="alert">{error}</p>}
    </div>
  );
}