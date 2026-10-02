import { cn } from '../lib/cn';

/**
 * ATOM — FormField
 * Renders a labelled input or textarea.
 */
// export function FormField({
//   label,
//   name,
//   type = 'text',
//   placeholder,
//   value,
//   onChange,
//   multiline = false,
// }) {
//   return (
//     <div className="mol-form-group">
//       <label htmlFor={name} className="atom-form-label">{label}</label>
//       {multiline ? (
//         <textarea
//           id={name}
//           name={name}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className="atom-textarea"
//         />
//       ) : (
//         <input
//           id={name}
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className="atom-input"
//         />
//       )}
//     </div>
//   );
// }

/**
 * ATOM — FormField
 * Renders a labelled input or textarea.
 * Optional: `required` (adds * to label), `error` (inline message + error styling).
 * Any extra props (autoComplete, inputMode, min…) are passed to the input/textarea.
 */
export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  multiline = false,
  required = false,
  error,
  ...rest
}) {
  const errorId = `${name}-error`;
  const shared = {
    id: name,
    name,
    placeholder,
    value,
    onChange,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    ...rest,
  };

  return (
    <div className="mol-form-group">
      <label htmlFor={name} className="atom-form-label">
        {label}
        {required && <span className="atom-form-required" aria-hidden="true">*</span>}
      </label>
      {multiline ? (
        <textarea {...shared} className={cn('atom-textarea', error && 'atom-input--error')} />
      ) : (
        <input {...shared} type={type} className={cn('atom-input', error && 'atom-input--error')} />
      )}
      {error && <p id={errorId} className="atom-form-error" role="alert">{error}</p>}
    </div>
  );
}