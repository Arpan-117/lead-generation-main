/**
 * ATOM — FormField
 * Renders a labelled input or textarea.
 */
export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  multiline = false,
}) {
  return (
    <div className="mol-form-group">
      <label htmlFor={name} className="atom-form-label">{label}</label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="atom-textarea"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="atom-input"
        />
      )}
    </div>
  );
}
