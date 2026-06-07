"use client";
import { useFormState, useFormStatus } from "react-dom";
import { submitContactAction, type ContactResult } from "./actions";

const INITIAL: ContactResult | null = null;

export function ContactForm() {
  const [state, action] = useFormState(submitContactAction, INITIAL);

  if (state?.ok) {
    return (
      <div className="rounded-2xl bg-white p-8 ring-1 ring-cream-200 shadow-card text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 grid place-items-center text-emerald-700">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink-900">
          Message landed in our backyard.
        </h3>
        <p className="mt-2 text-sm text-ink-600">
          We read every note ourselves — usually back to you within a day or
          two. Thanks for writing.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-2xl bg-white p-6 ring-1 ring-cream-200 shadow-card md:p-8">
      {state?.error && (
        <div className="mb-5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-100">
          {state.error}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          name="name"
          label="Your name"
          placeholder="Jane Doe"
          error={state?.fieldErrors?.name?.[0]}
          required
        />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="jane@example.com"
          error={state?.fieldErrors?.email?.[0]}
          required
        />
      </div>

      <div className="mt-4">
        <label className="label" htmlFor="topic">
          What&apos;s this about?
        </label>
        <select id="topic" name="topic" className="field" defaultValue="general">
          <option value="general">General — saying hi</option>
          <option value="indie-builder">
            Indie builder — I have an app to pitch
          </option>
          <option value="press">Press / partnerships</option>
          <option value="support">Support for an existing app</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="label" htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="field"
          placeholder="Tell us what's on your mind. The more specific, the better we can help."
          required
        />
        {state?.fieldErrors?.message?.[0] && (
          <p className="mt-1 text-xs text-amber-700">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      {/* Honeypot — visually hidden, screen-reader hidden, bot magnet */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-xs text-ink-400">
          We&apos;ll only use your email to reply. No newsletters, no list
          rentals, no nonsense.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending}>
      {pending ? (
        <>
          <Spinner /> Sending…
        </>
      ) : (
        "Send message"
      )}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={
          name === "email" ? "email" : name === "name" ? "name" : "off"
        }
        className="field"
      />
      {error && <p className="mt-1 text-xs text-amber-700">{error}</p>}
    </div>
  );
}
