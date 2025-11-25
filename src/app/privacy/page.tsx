import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Adelphi Biosciences privacy policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/80">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Information We Collect</h2>
          <p>
            When you use our website or contact us, we may collect the following information:
          </p>
          <ul>
            <li>Name and contact information (email, phone number)</li>
            <li>Company name and type</li>
            <li>Messages and inquiries you send us</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries and provide our services</li>
            <li>Communicate with you about our offerings</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            except as necessary to provide our services or as required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to
            disable cookies through your browser settings.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us
            at{" "}
            <a href="mailto:info@adelphibiosciences.com" className="text-teal">
              info@adelphibiosciences.com
            </a>{" "}
            to exercise these rights.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@adelphibiosciences.com" className="text-teal">
              info@adelphibiosciences.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
