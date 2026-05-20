import { useEffect, useState } from "react";
import { format } from "date-fns";
import { AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import SEO from "@/components/SEO";
import { siteConfig, fillCopy } from "@/config/site";

interface LegalPageProps {
  /** Which legal document to render. */
  doc: "privacy" | "terms";
}

const LegalPage = ({ doc }: LegalPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const legal = siteConfig.content.legal;
  const page = legal[doc];
  const path = doc === "privacy" ? "/privacy" : "/terms";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc]);

  const lastUpdated = format(new Date(legal.lastUpdated), "MMMM d, yyyy");

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${page.title} | ${siteConfig.name}`}
        description={fillCopy(page.intro)}
        canonical={path}
        noindex
      />
      <Header onBookNow={() => setIsModalOpen(true)} alwaysOpaque={true} />

      <main className="pt-28 pb-20">
        <article className="container px-4 mx-auto max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {page.title}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {lastUpdated}
          </p>

          {legal.disclaimer && (
            <div className="mt-6 flex gap-3 rounded-xl border border-cta/40 bg-cta/10 p-4 text-sm text-foreground/80">
              <AlertTriangle className="w-5 h-5 shrink-0 text-cta" />
              <p>{legal.disclaimer}</p>
            </div>
          )}

          <p className="mt-8 text-foreground/80 leading-relaxed">
            {fillCopy(page.intro)}
          </p>

          <div className="mt-8 space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  {section.heading}
                </h2>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {fillCopy(section.body)}
                </p>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />

      <BookingModal
        yacht={null}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LegalPage;
