import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceData = {
  "website-development": {
    title: "Website Development",
    subtitle: "Stunning, high-performance websites built with cutting-edge frameworks and 3D experiences.",
    use: "A website is the digital storefront of your business. We use advanced frameworks like Next.js and React to build platforms that are lightning-fast, highly secure, and visually breathtaking. Whether it's a simple landing page or a complex e-commerce platform, we craft custom solutions that capture attention.",
    works: [
      "Custom Design: We build layouts tailored to your specific brand aesthetic.",
      "Performance Optimization: Lightning-fast load times for better retention.",
      "Responsive Layouts: Flawless experience across mobile, tablet, and desktop.",
      "CMS Integration: Empowering your team to update content effortlessly."
    ],
    isComingSoon: false
  },
  "seo-optimization": {
    title: "SEO Optimization",
    subtitle: "Dominate search rankings with data-driven SEO strategies and AI-powered analytics.",
    use: "Search Engine Optimization ensures your business appears at the exact moment your potential customers are looking for your services. We leverage advanced technical SEO and content strategies to rank your site at the top of search engines.",
    works: [
      "Keyword Research: Identifying high-intent search terms.",
      "On-Page SEO: Optimizing site structure, meta tags, and content.",
      "Technical SEO: Improving crawlability, site speed, and mobile readiness.",
      "Link Building: Establishing authority through quality backlinks."
    ],
    isComingSoon: true
  },
  "performance-marketing": {
    title: "Performance Marketing",
    subtitle: "Maximize ROI with precision-targeted campaigns across Google, Meta, and beyond.",
    use: "Performance marketing is about paying for measurable results. We design and execute data-driven ad campaigns that target your ideal audience with laser precision, ensuring every dollar spent translates into profitable conversions.",
    works: [
      "Audience Targeting: Finding the right people at the right time.",
      "Ad Creation: Designing compelling creatives that drive action.",
      "A/B Testing: Continuously optimizing campaigns for better ROI.",
      "Analytics & Reporting: Transparent tracking of your ad spend."
    ],
    isComingSoon: true
  },
  "lead-generation": {
    title: "Lead Generation",
    subtitle: "Build high-converting funnels and automated systems that deliver qualified leads 24/7.",
    use: "A steady stream of qualified leads is the lifeblood of any growing business. We build automated funnels and capture systems that attract prospects and nurture them until they are ready to buy.",
    works: [
      "Funnel Strategy: Mapping the customer journey from awareness to purchase.",
      "Landing Page Optimization: Designing pages focused purely on conversion.",
      "Lead Magnets: Creating valuable assets to capture contact information.",
      "Automated Nurturing: Email sequences to build trust over time."
    ],
    isComingSoon: true
  },
  "ai-automation": {
    title: "AI Automation",
    subtitle: "Harness artificial intelligence to automate workflows, content, and customer interactions.",
    use: "Artificial Intelligence allows businesses to scale operations without scaling headcount. From intelligent chatbots that handle customer support 24/7 to automated workflows that eliminate manual data entry, we integrate AI to make your business smarter.",
    works: [
      "Custom AI Chatbots: Provide instant support and qualify leads automatically.",
      "Workflow Automation: Connect apps to eliminate repetitive tasks.",
      "Predictive Analytics: Use data to forecast trends and customer behavior.",
      "Content Generation: Scale your marketing efforts with AI-assisted tools."
    ],
    isComingSoon: false
  },
  "branding-and-design": {
    title: "Branding & Design",
    subtitle: "Craft unforgettable brand identities with premium visual design and strategic storytelling.",
    use: "Your brand is what people say about you when you're not in the room. We develop cohesive, premium visual identities that communicate your values, establish trust, and make you stand out in a crowded market.",
    works: [
      "Brand Strategy: Defining your unique position and voice.",
      "Logo & Identity Design: Creating memorable visual assets.",
      "UI/UX Design: Designing intuitive and beautiful digital experiences.",
      "Marketing Collateral: Ensuring consistency across all touchpoints."
    ],
    isComingSoon: false
  }
};

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", background: "var(--color-bg)", paddingTop: "80px" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", padding: "6rem 2rem", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.15
        }}>
          <Image 
            src="/service_hero.png" 
            alt="Service Background" 
            fill 
            style={{ objectFit: "cover" }} 
            priority
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent, var(--color-bg))"
          }} />
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <Link href="/#services" style={{ 
              display: "inline-flex", alignItems: "center", gap: "0.5rem", 
              color: "var(--color-text-secondary)", textDecoration: "none",
              fontWeight: 500, transition: "color 0.2s"
            }}>
              <ArrowLeft size={18} /> Back to Services
            </Link>
          </div>

          {data.isComingSoon && (
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(212, 175, 55, 0.1)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
                color: "#B8860B",
                padding: "6px 16px",
                borderRadius: 30,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.15)"
              }}>
                <span style={{ fontSize: "14px" }}>✨</span> Coming Soon
              </div>
            </div>
          )}

          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            marginBottom: "1.5rem",
            lineHeight: 1.1
          }}>
            {data.title}
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "var(--color-text-secondary)",
            maxWidth: 700,
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "4rem 2rem 8rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gap: "4rem" }}>
          
          <div className="glass-card" style={{ padding: "3rem" }}>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2rem",
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem"
            }}>
              What is the use?
            </h2>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8
            }}>
              {data.use}
            </p>
          </div>

          <div className="glass-card" style={{ padding: "3rem" }}>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2rem",
              color: "var(--color-text-primary)",
              marginBottom: "2rem"
            }}>
              How it works for Businesses
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {data.works.map((item, i) => {
                const parts = item.split(': ');
                const boldText = parts[0];
                const restText = parts.slice(1).join(': ');
                return (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <CheckCircle2 style={{ color: "var(--color-neon-purple)", marginTop: "4px", minWidth: 24 }} size={24} />
                    <div>
                      <strong style={{ color: "var(--color-text-primary)", fontSize: "1.1rem", display: "block", marginBottom: "4px" }}>
                        {boldText}
                      </strong>
                      <span style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                        {restText}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
              {data.isComingSoon ? "Join the Waitlist" : "Start Your Project"}
            </Link>
          </div>

        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
