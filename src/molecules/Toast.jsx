import { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { cn } from '../lib/cn';

const DURATION = { success: 6000, error: 8000 };

/**
 * MOLECULE — Toast
 * Self-dismissing notification. `toast` is { id, type: 'success' | 'error', message } or null.
 * Give each toast a new `id` so repeated messages restart the timer.
 * Keep `onClose` stable (useCallback) in the parent.
 */
export function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(onClose, DURATION[toast.type] ?? 6000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isError = toast.type === 'error';
  const Icon = isError ? AlertCircle : CheckCircle2;

  return (
    <div
      className={cn('mol-toast', isError ? 'mol-toast--error' : 'mol-toast--success')}
      role={isError ? 'alert' : 'status'}
    >
      <Icon size={20} className="mol-toast__icon" aria-hidden="true" />
      <p className="mol-toast__msg">{toast.message}</p>
      <button type="button" className="mol-toast__close" onClick={onClose} aria-label="Dismiss notification">
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}