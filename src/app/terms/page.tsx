import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Adelphi Biosciences terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-white/80">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Adelphi Biosciences website, you accept and agree to be
            bound by these Terms of Service. If you do not agree to these terms, please do not use
            our website.
          </p>

          <h2>Services</h2>
          <p>
            Adelphi Biosciences provides regulatory affairs consulting services for the life
            sciences industry. All services are provided under separate written agreements that
            define specific terms, deliverables, and fees.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the
            property of Adelphi Biosciences and is protected by intellectual property laws. You
            may not reproduce, distribute, or create derivative works without our written consent.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The information provided on this website is for general informational purposes only
            and does not constitute professional advice. The use of this website does not create a
            client relationship with Adelphi Biosciences.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Adelphi Biosciences shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from your use of this website or reliance on any
            information provided herein.
          </p>

          <h2>External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            content or privacy practices of these external sites.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to this website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws
            of the United States.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms of Service, please contact us at{" "}
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
