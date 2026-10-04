import { useCallback, useState } from 'react';
import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { ButtonPrimary } from '../atoms/Button';
import { FormField } from '../atoms/FormField';
import { SelectField } from '../molecules/SelectField';
import { QuantityField } from '../molecules/QuantityField';
import { LocationField } from '../molecules/LocationField';
import { FileUploadField } from '../molecules/FieldUploadField';
import { Toast } from '../molecules/Toast';
import { submitEnquiry } from '../lib/submitEnquiry';
import { BackLink } from '../molecules/BackLink';

const ENQUIRY_TYPES = [
  'Domestic B2B Supply',
  'Industrial Procurement',
  'Source from India',
  'General Inquiry',
];

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  enquiryType: '',
  quantity: '',
  unit: 'Pcs',
  location: '',
  message: '',
  boq: null,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^\+?[\d\s\-()]+$/;
const FIELD_ORDER = ['name', 'company', 'email', 'phone', 'enquiryType', 'quantity', 'location'];

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.company.trim()) e.company = 'Enter your company name.';

  if (!v.email.trim()) e.email = 'Enter your business email.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email address.';

  const digits = v.phone.replace(/\D/g, '');
  if (!v.phone.trim()) e.phone = 'Enter a phone or WhatsApp number.';
  else if (!PHONE_CHARS_RE.test(v.phone.trim()) || digits.length < 7 || digits.length > 15) {
    e.phone = 'Enter a valid number, including the country code.';
  }

  if (!v.enquiryType) e.enquiryType = 'Select an enquiry type.';

  if (!v.quantity) e.quantity = 'Enter the estimated quantity.';
  else if (!(Number(v.quantity) > 0)) e.quantity = 'Quantity must be greater than zero.';

  if (!v.location.trim()) e.location = 'Enter a delivery location.';

  return e;
}

export function RequirementForm() {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast]     = useState(null);

  const closeToast = useCallback(() => setToast(null), []);

  const setField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleChange = (e) => setField(e.target.name, e.target.value);

  const handleFile = (file, message) => {
    setField('boq', file);
    if (message) setErrors((prev) => ({ ...prev, boq: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const found = validate(form);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((key) => found[key]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setLoading(true);
    try {
      await submitEnquiry(form);
      setForm(EMPTY);
      setErrors({});
      setToast({
        id: Date.now(),
        type: 'success',
        message: 'Thank you. Your enquiry has been received, and our team will get back to you shortly.',
      });
    } catch (err) {
      console.error('Enquiry submission failed:', err);
      setToast({
        id: Date.now(),
        type: 'error',
        message: "We couldn't send your enquiry. Check your connection and try again, or email hello@chowdhuryglobal.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="org-requirement">
      <BackLink className="mb-10" />
      <div className="org-requirement__inner">
        <header className="org-requirement__header">
          <SectionLabel>Product Enquiry</SectionLabel>
          <SectionHeading className="mb-6">
            Tell Us What You <em>Need.</em>
          </SectionHeading>
          <BodyText>
            Share your requirement and our team will respond with a tailored sourcing proposal.
          </BodyText>
        </header>

        <form className="org-requirement__form" onSubmit={handleSubmit} noValidate>
          <div className="org-requirement__grid">
            <FormField
              label="Name"
              name="name"
              placeholder="Full name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <FormField
              label="Company Name"
              name="company"
              placeholder="Company name"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange}
              error={errors.company}
              required
            />
            <FormField
              label="Business Email"
              name="email"
              type="email"
              placeholder="name@company.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <FormField
              label="Phone / WhatsApp"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />
            <div className="org-requirement__full">
              <SelectField
                label="Enquiry Type"
                name="enquiryType"
                placeholder="Select enquiry type"
                options={ENQUIRY_TYPES}
                value={form.enquiryType}
                onChange={handleChange}
                error={errors.enquiryType}
                required
              />
            </div>
          </div>

          <div className="org-requirement__section">
            <h2 className="org-requirement__subheading">Product Requirement</h2>

            <div className="org-requirement__grid">
              <QuantityField
                label="Estimated Quantity"
                quantity={form.quantity}
                unit={form.unit}
                onChange={handleChange}
                error={errors.quantity}
                required
              />
              <LocationField
                label="Delivery Location"
                name="location"
                placeholder="City, country"
                value={form.location}
                onChange={(val) => setField('location', val)}
                error={errors.location}
                required
              />
              <div className="org-requirement__full">
                <FormField
                  label="Message / Specifications"
                  name="message"
                  multiline
                  placeholder="Product details, grades, brands, packaging, delivery timeline…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className="org-requirement__full">
                <FileUploadField
                  label="Upload BOQ Specification"
                  name="boq"
                  file={form.boq}
                  onChange={handleFile}
                  error={errors.boq}
                />
              </div>
            </div>
          </div>

          <p className="org-requirement__note">* Required fields</p>

          <ButtonPrimary disabled={loading} className="org-requirement__submit">
            {loading ? 'Sending…' : 'Submit Enquiry'}
          </ButtonPrimary>
        </form>
      </div>

      <Toast toast={toast} onClose={closeToast} />
    </section>
  );
}