import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Regulatory insights and thought leadership from Adelphi Biosciences. Expert perspectives on FDA regulations, approval pathways, and industry trends.",
  openGraph: {
    title: "Insights | Adelphi Biosciences",
    description:
      "Regulatory insights and thought leadership on FDA regulations, approval pathways, and industry trends.",
  },
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Insights</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Regulatory perspectives and thought leadership from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="section-padding bg-cloud">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-12">
            <CardContent className="p-0">
              <div className="w-20 h-20 mx-auto mb-6 bg-navy/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-navy" />
              </div>

              <h2 className="text-2xl font-bold text-navy mb-4">Coming Soon</h2>
              <p className="text-charcoal/70 mb-8 max-w-lg mx-auto">
                We&apos;re preparing a collection of insights on regulatory strategy, FDA
                guidance interpretation, and industry best practices. Check back soon for
                valuable perspectives from our team.
              </p>

              <div className="bg-cloud rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Bell className="h-5 w-5 text-teal" />
                  <span className="font-medium text-navy">Stay Updated</span>
                </div>
                <p className="text-sm text-charcoal/70">
                  Connect with us on LinkedIn to be notified when new insights are published.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-navy hover:bg-steel">
                  <a
                    href="https://www.linkedin.com/company/adelphi-biosciences"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on LinkedIn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Topics */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-navy mb-6">Topics We&apos;ll Cover</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "FDA Guidance Interpretation",
                "Orphan Drug Designation Strategies",
                "Breakthrough Therapy Updates",
                "HAE Treatment Landscape",
                "Regulatory Pathway Selection",
                "Post-Marketing Requirements",
              ].map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border"
                >
                  <div className="w-2 h-2 bg-teal rounded-full" />
                  <span className="text-charcoal/80">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Regulatory Question?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            While our insights section is in development, we&apos;re happy to discuss your
            specific regulatory challenges directly.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal/90">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
