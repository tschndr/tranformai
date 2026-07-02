import type { Metadata } from "next";
import { LegalShell } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Rewrite Anything handles your data: the text you submit is processed to generate a result and is never stored on our servers.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="July 2, 2026"
      lead={
        <>
          Rewrite Anything (&ldquo;we,&rdquo; &ldquo;us&rdquo;) runs a hub of AI text tools at{" "}
          <strong>rewrite-anything.com</strong>. This policy explains what we collect, why, and the
          choices you have. The short version: the text you submit to a tool is sent to our AI
          provider to generate your result and is <strong>not stored</strong> on our servers.
        </>
      }
    >
      <h2>Information we collect</h2>

      <h3>Text you submit to our tools</h3>
      <p>
        When you use a tool, the text you enter is transmitted to our AI provider (Anthropic) to
        generate a result, and the result is returned to you. <strong>We do not store the text you
        submit or the output we generate</strong> in our database. We keep a usage record of each
        generation for rate-limiting and billing — the tool used, a one-way hashed form of your IP
        address, your account ID if signed in, the number of tokens processed, and how the request
        was paid for — but <strong>not the content itself</strong>.
      </p>

      <h3>Account information</h3>
      <p>
        You can use the free tier without an account. If you sign in, we collect your email address
        (used for passwordless magic-link sign-in) and, optionally, a display name. We use database
        sessions; a single essential cookie keeps you signed in.
      </p>

      <h3>Payment information</h3>
      <p>
        Payments are processed by <strong>Stripe</strong>. We never see or store your full card
        details. We retain a Stripe customer ID, your subscription status and plan, and your credit
        balance so we can provide the service you paid for.
      </p>

      <h3>Automatically collected information</h3>
      <p>
        To enforce the free daily limit and protect against abuse, we derive a{" "}
        <strong>salted one-way hash of your IP address</strong> — we do not retain your raw IP in
        our application database. Our hosting and infrastructure providers may process standard
        server logs (including IP addresses) on our behalf as part of delivering the service.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a single <strong>essential cookie</strong> to keep you signed in. We do not currently
        use advertising or third-party tracking cookies. If we introduce advertising in the future,
        we will update this policy and disclose any advertising cookies before they are used.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To generate results from the text you submit.</li>
        <li>To provide passwordless sign-in and maintain your session.</li>
        <li>To enforce the free daily allowance and prevent abuse.</li>
        <li>To process payments, apply credits, and manage subscriptions.</li>
        <li>To operate, secure, debug, and improve the service.</li>
      </ul>

      <h2>AI processing</h2>
      <p>
        Text you submit is sent to <strong>Anthropic</strong> via its API to generate your result.
        Under Anthropic&rsquo;s commercial API terms, inputs and outputs submitted through the API
        are not used to train its models. We send Anthropic only the text needed to fulfill your
        request.
      </p>

      <h2>Service providers we share data with</h2>
      <p>
        We do not sell your personal information. We share data only with the vendors that operate
        the service, each acting on our behalf:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — application hosting and delivery.
        </li>
        <li>
          <strong>Neon</strong> — database hosting (accounts, billing records, usage logs).
        </li>
        <li>
          <strong>Anthropic</strong> — AI processing of the text you submit.
        </li>
        <li>
          <strong>Resend</strong> — delivery of sign-in emails.
        </li>
        <li>
          <strong>Stripe</strong> — payment processing.
        </li>
      </ul>
      <p>
        We may also disclose information if required by law or to protect the rights, safety, and
        security of our users and service.
      </p>

      <h2>Data retention</h2>
      <p>
        We do not retain the text you submit or the results we generate. Account and billing records
        are kept for as long as your account is active and as needed to comply with legal, tax, and
        accounting obligations. Usage logs (which contain no submitted content) are retained to
        operate rate limiting and billing. When you delete your account, we remove your associated
        account data.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        You can request access to, correction of, or deletion of your account data, or ask us to
        delete your account entirely, by contacting us at the address below. Depending on where you
        live, you may have additional rights under laws such as the GDPR or CCPA, including the right
        to object to or restrict certain processing. We honor these requests as required by
        applicable law.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard measures to protect your information, including encryption in
        transit, hashed IP addresses, and reputable infrastructure providers. No method of
        transmission or storage is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>
        Rewrite Anything is not directed to children under 13, and we do not knowingly collect
        personal information from them. If you believe a child has provided us information, contact
        us and we will delete it.
      </p>

      <h2>International users</h2>
      <p>
        We operate in the United States and use providers that may process data in the United States
        and other countries. By using the service, you understand your information may be transferred
        to and processed in these locations.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will revise the &ldquo;Last
        updated&rdquo; date above, and material changes will be reflected here.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a href="mailto:support@rewrite-anything.com">support@rewrite-anything.com</a>.
      </p>
    </LegalShell>
  );
}
