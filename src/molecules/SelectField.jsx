import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/cn';

/**
 * MOLECULE — SelectField
 * Labelled native select with a custom chevron.
 * `options` can be strings or { value, label } objects.
 * Pass `ariaLabel` instead of `label` for label-less use (e.g. inside QuantityField).
 */
export function SelectField({
  label,
  ariaLabel,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
  className = '',
}) {
  const errorId = `${name}-error`;

  return (
    <div className={cn('mol-form-group', className)}>
      {label && (
        <label htmlFor={name} className="atom-form-label">
          {label}
          {required && <span className="atom-form-required" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="mol-select">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          aria-label={label ? undefined : ariaLabel}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn('atom-select', !value && 'atom-select--empty', error && 'atom-input--error')}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => {
            const o = typeof opt === 'string' ? { value: opt, label: opt } : opt;
            return <option key={o.value} value={o.value}>{o.label}</option>;
          })}
        </select>
        <ChevronDown size={16} className="mol-select__icon" aria-hidden="true" />
      </div>
      {error && <p id={errorId} className="atom-form-error" role="alert">{error}</p>}
    </div>
  );
}