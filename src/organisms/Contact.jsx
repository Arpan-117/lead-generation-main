import { useState } from 'react';
import { SectionLabel, SectionHeading, BodyText } from '../atoms/Typography';
import { ButtonPrimary } from '../atoms/Button';
import { FormField } from '../atoms/FormField';

const DETAILS = [
  { key: 'Email',   val: 'contact@chowdhuryglovalventures.com' },
  { key: 'Based in', val: 'India' },
  { key: 'Markets', val: 'India · Middle East · Africa' },
];

const EMPTY = { name: '', company: '', email: '', message: '' };

export function Contact() {
  const [form, setForm]           = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const isDisabled = loading || !form.name || !form.email;

  return (
    <section id="contact" className="org-contact">
      {/* Left — info */}
      <div>
        <SectionLabel>Get In Touch</SectionLabel>

        <SectionHeading className="mb-6">
          Begin a<br /><em>partnership.</em>
        </SectionHeading>

        <BodyText className="mb-8">
          Whether you are a buyer, seller, or potential trade partner — we would welcome
          a conversation. Every great partnership begins with a single introduction.
        </BodyText>

        <div className="flex flex-col gap-4">
          {DETAILS.map(({ key, val }) => (
            <div key={key} className="flex gap-4 items-baseline">
              <span className="mol-contact-key">{key}</span>
              <span className="mol-contact-val">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="org-contact__form">
        {submitted ? (
          <p className="org-contact__success">
            Thank you. We will be in touch shortly.
          </p>
        ) : (
          <>
            <FormField
              label="Your Name"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
            />
            <FormField
              label="Company"
              name="company"
              placeholder="Company name"
              value={form.company}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
            />
            <FormField
              label="Message"
              name="message"
              placeholder="Tell us about your trading needs..."
              value={form.message}
              onChange={handleChange}
              multiline
            />
            <ButtonPrimary
              onClick={handleSubmit}
              disabled={isDisabled}
              className="org-contact__submit"
            >
              {loading ? 'Sending…' : 'Send Message'}
            </ButtonPrimary>
          </>
        )}
      </div>
    </section>
  );
}
