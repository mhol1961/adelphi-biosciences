import { Hero } from "@/components/home/hero";
import { CredibilityBanner } from "@/components/home/credibility-banner";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyAdelphi } from "@/components/home/why-adelphi";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

// JSON-LD Structured Data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adelphi Biosciences",
  url: "https://adelphibiosciences.com",
  logo: "https://adelphibiosciences.com/logo.png",
  description:
    "Strategic regulatory affairs consulting for life sciences. From IND to FDA approval — executive-level expertise that delivers results.",
  founder: {
    "@type": "Person",
    name: "Peter Parsonson",
    jobTitle: "Founder & Principal Consultant",
    description:
      "Named on FDA approval letter for Ekterly® (sebetralstat). US Patent Holder #9,186,363. 20+ years of executive regulatory leadership.",
  },
  sameAs: ["https://www.linkedin.com/company/adelphi-biosciences"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@adelphibiosciences.com",
    contactType: "Business Inquiries",
  },
  areaServed: "United States",
  serviceType: [
    "Regulatory Affairs Consulting",
    "FDA Submission Support",
    "IND/NDA/BLA Strategy",
    "Regulatory Due Diligence",
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pharmaceutical Regulatory Affairs Consulting",
  provider: {
    "@type": "Organization",
    name: "Adelphi Biosciences",
  },
  areaServed: "United States",
  description:
    "Comprehensive regulatory affairs consulting services including IND preparation, NDA/BLA submissions, FDA meeting support, and regulatory due diligence.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Regulatory Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regulatory Strategy",
          description: "IND/NDA/BLA planning and development strategies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Submission Support",
          description: "CTD preparation and FDA correspondence management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lifecycle Management",
          description: "Post-approval regulatory support and compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Due Diligence",
          description: "Regulatory risk assessment for M&A and investments",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Page Content */}
      <Hero />
      <CredibilityBanner />
      <ServicesOverview />
      <WhyAdelphi />
      <Testimonials />
      <CTASection />
    </>
  );
}
