/**
 * LIB — submitEnquiry
 * Sends the Product Requirement enquiry as multipart/form-data (so the BOQ file can travel with it).
 * Set VITE_ENQUIRY_ENDPOINT in .env to your form backend URL.
 * Swap this file's internals if the destination changes — the form itself doesn't care.
 */
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

export async function submitEnquiry(values) {
  if (!ENDPOINT) throw new Error('VITE_ENQUIRY_ENDPOINT is not set');

  const body = new FormData();
  body.append('form_type', 'Product Requirement');
  body.append('name', values.name.trim());
  body.append('company', values.company.trim());
  body.append('email', values.email.trim());
  body.append('phone', values.phone.trim());
  body.append('enquiry_type', values.enquiryType);
  body.append('estimated_quantity', `${values.quantity} ${values.unit}`);
  body.append('delivery_location', values.location.trim());
  body.append('message', values.message.trim());
  if (values.boq) body.append('boq_file', values.boq, values.boq.name);

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    body,
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) throw new Error(`Enquiry request failed with status ${res.status}`);
}