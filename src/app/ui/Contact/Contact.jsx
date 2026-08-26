'use client';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '../Icons/Icons';
import SocialLinks from '../SocialLinks/SocialLinks';

const EMAIL = 'mussimbigrace@gmail.com';

// ---------------------------------------------------------------------------
// WHERE THE FORM SENDS
//
// A static site cannot send email by itself; the browser has no mail server.
// A form service receives the submission and forwards it to an inbox. Fill in
// ONE of the two below and the form starts delivering.
//
//   Web3Forms   https://web3forms.com  -> enter your email, they email you an
//               access key. Paste the key into FORM_ACCESS_KEY and leave
//               FORM_ENDPOINT as the api.web3forms.com URL.
//
//   Formspree   https://formspree.io -> create a form, copy its endpoint
//               (looks like https://formspree.io/f/abcdwxyz) into
//               FORM_ENDPOINT and leave FORM_ACCESS_KEY empty.
//
// While both are empty the form falls back to opening the sender's own mail
// client with the message pre-filled, and says so honestly rather than
// claiming the message was sent.
// ---------------------------------------------------------------------------
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const FORM_ACCESS_KEY = 'bceffeb4-2ab8-40de-a2be-9ad0ce1990f6';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle, formTitle } = data;
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const failure = {
    ok: false,
    msg: `That did not go through. Please email me directly at ${EMAIL} and I will get back to you.`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const name = fd.get('name');
    const email = fd.get('email');
    const subject = fd.get('subject');
    const message = fd.get('msg');

    // No service configured: hand off to the sender's mail client.
    if (!FORM_ENDPOINT) {
      const body = `${message}\n\nFrom: ${name} (${email})`;
      window.location.href =
        `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        ok: true,
        msg: 'Your email app is opening with the message ready. Press send there to deliver it.',
      });
      return;
    }

    // Field names the services expect, alongside the ones already in the form.
    fd.set('message', message);
    fd.set('subject', subject);
    fd.set('_subject', subject);
    fd.set('_replyto', email);
    fd.set('_captcha', 'false');
    if (FORM_ACCESS_KEY) fd.set('access_key', FORM_ACCESS_KEY);

    setSending(true);
    setStatus(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });

      let payload = {};
      try {
        payload = await res.json();
      } catch {
        payload = {};
      }

      // Formspree answers with ok, Web3Forms and FormSubmit with success.
      const delivered =
        res.ok && payload.success !== false && payload.ok !== false;

      if (delivered) {
        form.reset();
        setStatus({
          ok: true,
          msg: `Thank you ${name || ''}`.trim() +
            ', your message has been sent. I will reply to ' +
            `${email} shortly.`,
        });
      } else {
        setStatus(failure);
      }
    } catch {
      setStatus(failure);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">{formTitle}</h3>
            <div id="st-alert" aria-live="polite">
              {status && (
                <div
                  className={`st-alert-msg${status.ok ? ' st-alert-ok' : ' st-alert-bad'}`}
                  role="status"
                >
                  <span className="st-alert-icon" aria-hidden="true">
                    {status.ok ? '✓' : '!'}
                  </span>
                  <span>{status.msg}</span>
                </div>
              )}
            </div>
            <form
              className="st-contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="st-form-field">
                <label className="st-visually-hidden" htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="st-form-field">
                <label className="st-visually-hidden" htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="st-form-field">
                <label className="st-visually-hidden" htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="st-form-field">
                <label className="st-visually-hidden" htmlFor="msg">Your message</label>
                <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your message" required></textarea>
              </div>
              {/* Spam trap: a real person never fills this in, bots usually do. */}
              <input
                type="checkbox"
                name="botcheck"
                className="st-visually-hidden"
                tabIndex="-1"
                autoComplete="off"
              />
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send message'}
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            {text ? <div className="st-contact-text">{text}</div> : null}
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Location</h4>
                  <span>Stoney Creek, Ontario</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:translate" />
                </div>
                <div className="st-single-info-details">
                  <h4>Languages</h4>
                  <span>French and English</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
