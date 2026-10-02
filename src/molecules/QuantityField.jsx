import { SelectField } from './SelectField';
import { cn } from '../lib/cn';

export const QUANTITY_UNITS = [
  'Pcs', 'Sets', 'Boxes', 'Kg', 'MT', 'Litres', 'Drums', 'Pallets', 'Containers',
];

/**
 * MOLECULE — QuantityField
 * Number input + unit dropdown. Both report through the same `onChange`
 * (inputs are named "quantity" and "unit").
 */
export function QuantityField({ label, quantity, unit, onChange, error, required = false }) {
  return (
    <div className="mol-form-group">
      <label htmlFor="quantity" className="atom-form-label">
        {label}
        {required && <span className="atom-form-required" aria-hidden="true">*</span>}
      </label>
      <div className="mol-quantity">
        <input
          id="quantity"
          name="quantity"
          type="number"
          inputMode="decimal"
          min="0"
          step="any"
          placeholder="e.g. 500"
          value={quantity}
          onChange={onChange}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'quantity-error' : undefined}
          className={cn('atom-input mol-quantity__input', error && 'atom-input--error')}
        />
        <SelectField
          name="unit"
          ariaLabel="Unit"
          value={unit}
          onChange={onChange}
          options={QUANTITY_UNITS}
          className="mol-quantity__unit"
        />
      </div>
      {error && <p id="quantity-error" className="atom-form-error" role="alert">{error}</p>}
    </div>
  );
}