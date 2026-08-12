"use client";
// Renders a complete mini-website from a blueprint + palette config
export default function TemplateRenderer({ template, scale = 1 }) {
  const { palette: p, blueprint: bp } = template;
  if (!p || !bp) return null;

  const s = (base) => ({ fontFamily: "'Inter',sans-serif", color: p.text, ...base });

  const sections = {
    hero: (
      <div key="hero" style={s({ background: p.heroBg, padding: scale < 1 ? "30px 20px" : "80px 40px", textAlign: bp.heroType === "split-left" ? "left" : "center", display: "flex", flexDirection: bp.heroType.includes("split") ? "row" : "column", alignItems: "center", gap: 20, minHeight: scale < 1 ? 120 : 340 })}>
        {bp.heroType.includes("split") && <div style={{ flex: 1, background: `${p.primary}22`, borderRadius: 12, height: scale < 1 ? 60 : 180, width: "100%" }} />}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: scale < 1 ? 10 : 32, fontWeight: 800, marginBottom: 8, lineHeight: 1.2 }}>{template.name}</div>
          <div style={{ fontSize: scale < 1 ? 6 : 16, color: p.textSecondary, marginBottom: 12, lineHeight: 1.4 }}>Premium {bp.category} template with modern design</div>
          <div style={{ display: "flex", gap: 8, justifyContent: bp.heroType === "split-left" ? "flex-start" : "center" }}>
            <div style={{ background: p.btnBg, color: p.btnText, padding: scale < 1 ? "3px 8px" : "10px 24px", borderRadius: 6, fontSize: scale < 1 ? 5 : 14, fontWeight: 600 }}>Get Started</div>
            <div style={{ border: `1px solid ${p.primary}`, color: p.primary, padding: scale < 1 ? "3px 8px" : "10px 24px", borderRadius: 6, fontSize: scale < 1 ? 5 : 14 }}>Learn More</div>
          </div>
        </div>
      </div>
    ),
    features: <GridSection key="feat" p={p} bp={bp} scale={scale} title="Features" items={["Fast Performance","Secure & Reliable","24/7 Support","Easy Integration","Analytics","Scalable"]} icon="⚡" />,
    services: <GridSection key="svc" p={p} bp={bp} scale={scale} title="Our Services" items={["Web Development","Digital Marketing","Brand Strategy","UI/UX Design","Cloud Solutions","Consulting"]} icon="🔧" />,
    "featured-products": <GridSection key="fp" p={p} bp={bp} scale={scale} title="Featured Products" items={["Premium Widget","Pro Dashboard","Elite Package","Starter Kit","Business Suite","Enterprise"]} icon="🛒" hasPrice />,
    "product-grid": <GridSection key="pg" p={p} bp={bp} scale={scale} title="All Products" items={["Product A","Product B","Product C","Product D","Product E","Product F"]} icon="📦" hasPrice />,
    "featured-posts": <GridSection key="fps" p={p} bp={bp} scale={scale} title="Latest Posts" items={["Getting Started Guide","Industry Trends 2025","Pro Tips & Tricks","Behind the Scenes","Case Study","Interview"]} icon="📝" hasDate />,
    "post-grid": <GridSection key="pgs" p={p} bp={bp} scale={scale} title="All Articles" items={["Article One","Article Two","Article Three","Article Four","Article Five","Article Six"]} icon="📰" hasDate />,
    "project-grid": <GridSection key="prj" p={p} bp={bp} scale={scale} title="Projects" items={["Brand Redesign","E-commerce App","Dashboard UI","Mobile App","Marketing Site","SaaS Platform"]} icon="🎨" />,
    portfolio: <GridSection key="port" p={p} bp={bp} scale={scale} title="Our Work" items={["Project Alpha","Project Beta","Project Gamma","Project Delta","Project Epsilon","Project Zeta"]} icon="💼" />,
    gallery: <GridSection key="gal" p={p} bp={bp} scale={scale} title="Gallery" items={["Landscape","Portrait","Urban","Nature","Abstract","Minimal"]} icon="📷" />,
    menu: <GridSection key="menu" p={p} bp={bp} scale={scale} title="Our Menu" items={["Appetizers","Main Course","Seafood","Desserts","Beverages","Specials"]} icon="🍽️" hasPrice />,
    pricing: <PricingSection key="price" p={p} scale={scale} />,
    testimonials: <TestimonialsSection key="test" p={p} scale={scale} />,
    stats: <StatsSection key="stats" p={p} scale={scale} />,
    about: <AboutSection key="about" p={p} scale={scale} bp={bp} />,
    skills: <SkillsSection key="skills" p={p} scale={scale} />,
    team: <GridSection key="team" p={p} bp={bp} scale={scale} title="Our Team" items={["CEO & Founder","CTO","Head of Design","Lead Developer","Marketing Head","Operations"]} icon="👤" />,
    clients: <GridSection key="clients" p={p} bp={bp} scale={scale} title="Trusted By" items={["Acme Corp","TechStart","GlobalFin","MediCare","EduPro","RetailMax"]} icon="🏢" />,
    categories: <CategoriesSection key="cats" p={p} scale={scale} />,
    "sale-banner": <BannerSection key="sale" p={p} scale={scale} text="🔥 Mega Sale — Up to 60% Off Everything!" />,
    specials: <BannerSection key="spec" p={p} scale={scale} text="⭐ Chef's Special — Try our signature dishes today!" />,
    "how-it-works": <HowItWorksSection key="hiw" p={p} scale={scale} />,
    "social-proof": <StatsSection key="sp" p={p} scale={scale} />,
    benefits: <GridSection key="ben" p={p} bp={bp} scale={scale} title="Why Choose Us" items={["Save Time","Cut Costs","Grow Faster","Stay Secure","Scale Easy","Get Support"]} icon="✅" />,
    process: <HowItWorksSection key="proc" p={p} scale={scale} />,
    newsletter: <NewsletterSection key="nl" p={p} scale={scale} />,
    contact: <ContactSection key="cont" p={p} scale={scale} />,
    reservation: <ContactSection key="res" p={p} scale={scale} />,
    cta: <BannerSection key="cta" p={p} scale={scale} text="Ready to get started? Join thousands of happy customers today." />,
    sidebar: null,
    footer: (
      <div key="footer" style={s({ background: p.bgCard, padding: scale < 1 ? "10px 12px" : "40px", borderTop: `1px solid ${p.border}`, textAlign: "center" })}>
        <div style={{ fontSize: scale < 1 ? 5 : 13, color: p.textSecondary }}>© 2025 {template.name}. All rights reserved.</div>
      </div>
    ),
  };

  return (
    <div style={{ width: "100%", background: p.bg, overflow: "hidden", position: "relative" }}>
      {/* Nav */}
      <div style={s({ background: p.navBg, padding: scale < 1 ? "6px 10px" : "14px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${p.border}` })}>
        <div style={{ fontWeight: 700, fontSize: scale < 1 ? 7 : 18, color: p.primary }}>{template.name}</div>
        <div style={{ display: "flex", gap: scale < 1 ? 6 : 20 }}>
          {["Home","About","Services","Contact"].map(l => (
            <div key={l} style={{ fontSize: scale < 1 ? 4 : 13, color: p.textSecondary }}>{l}</div>
          ))}
        </div>
      </div>
      {/* Sections */}
      {bp.sections.filter(s => s !== "sidebar").map(sec => sections[sec] || null)}
    </div>
  );
}

// ═══ Sub-components ═══

function GridSection({ p, bp, scale, title, items, icon, hasPrice, hasDate }) {
  const cols = Math.min(bp.gridCols, scale < 1 ? 3 : bp.gridCols);
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bg }}>
      <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, textAlign: "center", marginBottom: scale < 1 ? 8 : 30 }}>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: scale < 1 ? 4 : 16 }}>
        {items.slice(0, cols * 2).map((item, i) => (
          <div key={i} style={{ background: p.bgCard, border: `1px solid ${p.border}`, borderRadius: bp.cardStyle === "sharp" ? 0 : bp.cardStyle === "rounded" ? 12 : 8, overflow: "hidden" }}>
            <div style={{ height: scale < 1 ? 18 : 80, background: `${p.primary}${["18","12","20","15","10","22"][i % 6]}` }} />
            <div style={{ padding: scale < 1 ? "3px 4px" : "12px 16px" }}>
              <div style={{ fontSize: scale < 1 ? 5 : 14, fontWeight: 600, color: p.text, marginBottom: 2 }}>{icon} {item}</div>
              {hasPrice && <div style={{ fontSize: scale < 1 ? 4 : 13, color: p.primary, fontWeight: 700 }}>₹{(i + 1) * 999}</div>}
              {hasDate && <div style={{ fontSize: scale < 1 ? 3 : 11, color: p.textSecondary }}>May {i + 1}, 2025</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingSection({ p, scale }) {
  const plans = [{ name: "Starter", price: "₹999/mo" }, { name: "Pro", price: "₹2,499/mo" }, { name: "Enterprise", price: "₹9,999/mo" }];
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bgCard }}>
      <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, textAlign: "center", marginBottom: scale < 1 ? 8 : 30 }}>Pricing</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: scale < 1 ? 4 : 16 }}>
        {plans.map((plan, i) => (
          <div key={i} style={{ background: p.bg, border: i === 1 ? `2px solid ${p.primary}` : `1px solid ${p.border}`, borderRadius: 10, padding: scale < 1 ? "6px" : "24px", textAlign: "center" }}>
            <div style={{ fontSize: scale < 1 ? 5 : 16, fontWeight: 600, color: p.text }}>{plan.name}</div>
            <div style={{ fontSize: scale < 1 ? 7 : 28, fontWeight: 800, color: p.primary, margin: scale < 1 ? "3px 0" : "12px 0" }}>{plan.price}</div>
            <div style={{ background: p.btnBg, color: p.btnText, padding: scale < 1 ? "2px 4px" : "8px 16px", borderRadius: 6, fontSize: scale < 1 ? 4 : 13, fontWeight: 600 }}>Choose Plan</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection({ p, scale }) {
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bg }}>
      <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, textAlign: "center", marginBottom: scale < 1 ? 8 : 30 }}>Testimonials</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: scale < 1 ? 4 : 16 }}>
        {["Sarah K.","Mike R.","Elena P."].map((name, i) => (
          <div key={i} style={{ background: p.bgCard, border: `1px solid ${p.border}`, borderRadius: 10, padding: scale < 1 ? "6px" : "20px" }}>
            <div style={{ fontSize: scale < 1 ? 4 : 13, color: p.textSecondary, marginBottom: 6, fontStyle: "italic" }}>"Absolutely fantastic experience."</div>
            <div style={{ fontSize: scale < 1 ? 4 : 13, color: p.primary, fontWeight: 600 }}>⭐⭐⭐⭐⭐</div>
            <div style={{ fontSize: scale < 1 ? 4 : 12, color: p.text, fontWeight: 600, marginTop: 4 }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsSection({ p, scale }) {
  const stats = [{ n: "10K+", l: "Users" }, { n: "99%", l: "Uptime" }, { n: "500+", l: "Projects" }, { n: "24/7", l: "Support" }];
  return (
    <div style={{ padding: scale < 1 ? "10px 12px" : "40px", background: p.bgCard, display: "flex", justifyContent: "space-around" }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div style={{ fontSize: scale < 1 ? 8 : 30, fontWeight: 800, color: p.primary }}>{s.n}</div>
          <div style={{ fontSize: scale < 1 ? 4 : 13, color: p.textSecondary }}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}

function AboutSection({ p, scale, bp }) {
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bg, display: "flex", gap: scale < 1 ? 6 : 30, alignItems: "center", flexDirection: scale < 1 ? "column" : "row" }}>
      <div style={{ flex: 1, minHeight: scale < 1 ? 30 : 140, background: `${p.primary}15`, borderRadius: 10 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, marginBottom: 6 }}>About Us</div>
        <div style={{ fontSize: scale < 1 ? 4 : 14, color: p.textSecondary, lineHeight: 1.5 }}>We are a team of passionate professionals dedicated to delivering excellence in every {bp.category.toLowerCase()} project we undertake.</div>
      </div>
    </div>
  );
}

function SkillsSection({ p, scale }) {
  const skills = [{ name: "Design", pct: 95 }, { name: "Development", pct: 90 }, { name: "Marketing", pct: 85 }];
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bgCard }}>
      <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, textAlign: "center", marginBottom: scale < 1 ? 8 : 24 }}>Skills</div>
      {skills.map((sk, i) => (
        <div key={i} style={{ marginBottom: scale < 1 ? 4 : 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: scale < 1 ? 4 : 13, color: p.text }}>{sk.name}</span>
            <span style={{ fontSize: scale < 1 ? 4 : 13, color: p.primary }}>{sk.pct}%</span>
          </div>
          <div style={{ height: scale < 1 ? 3 : 8, background: p.border, borderRadius: 4 }}>
            <div style={{ width: `${sk.pct}%`, height: "100%", background: p.btnBg, borderRadius: 4 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CategoriesSection({ p, scale }) {
  const cats = ["Electronics","Fashion","Home","Beauty","Sports","Books"];
  return (
    <div style={{ padding: scale < 1 ? "10px 12px" : "40px", background: p.bgCard }}>
      <div style={{ display: "flex", gap: scale < 1 ? 4 : 12, justifyContent: "center", flexWrap: "wrap" }}>
        {cats.map((c, i) => (
          <div key={i} style={{ background: `${p.primary}15`, border: `1px solid ${p.border}`, borderRadius: 20, padding: scale < 1 ? "2px 6px" : "8px 20px", fontSize: scale < 1 ? 4 : 13, color: p.primary, fontWeight: 500 }}>{c}</div>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSection({ p, scale }) {
  const steps = [{ n: "1", t: "Sign Up" }, { n: "2", t: "Configure" }, { n: "3", t: "Launch" }];
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bgCard }}>
      <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, textAlign: "center", marginBottom: scale < 1 ? 8 : 30 }}>How It Works</div>
      <div style={{ display: "flex", justifyContent: "center", gap: scale < 1 ? 8 : 40 }}>
        {steps.map((st, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ width: scale < 1 ? 14 : 48, height: scale < 1 ? 14 : 48, borderRadius: "50%", background: p.btnBg, color: p.btnText, display: "flex", alignItems: "center", justifyContent: "center", fontSize: scale < 1 ? 6 : 20, fontWeight: 700, margin: "0 auto 6px" }}>{st.n}</div>
            <div style={{ fontSize: scale < 1 ? 4 : 14, color: p.text, fontWeight: 600 }}>{st.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BannerSection({ p, scale, text }) {
  return (
    <div style={{ padding: scale < 1 ? "8px 12px" : "30px 40px", background: p.btnBg, textAlign: "center" }}>
      <div style={{ fontSize: scale < 1 ? 5 : 18, fontWeight: 700, color: p.btnText }}>{text}</div>
    </div>
  );
}

function NewsletterSection({ p, scale }) {
  return (
    <div style={{ padding: scale < 1 ? "10px 12px" : "40px", background: p.bgCard, textAlign: "center" }}>
      <div style={{ fontSize: scale < 1 ? 6 : 20, fontWeight: 700, color: p.text, marginBottom: 8 }}>Stay Updated</div>
      <div style={{ display: "flex", gap: 6, justifyContent: "center", maxWidth: scale < 1 ? "100%" : 400, margin: "0 auto" }}>
        <div style={{ flex: 1, height: scale < 1 ? 10 : 38, background: p.bg, border: `1px solid ${p.border}`, borderRadius: 6 }} />
        <div style={{ background: p.btnBg, color: p.btnText, padding: scale < 1 ? "2px 6px" : "8px 18px", borderRadius: 6, fontSize: scale < 1 ? 4 : 13, fontWeight: 600, display: "flex", alignItems: "center" }}>Subscribe</div>
      </div>
    </div>
  );
}

function ContactSection({ p, scale }) {
  return (
    <div style={{ padding: scale < 1 ? "14px 12px" : "50px 40px", background: p.bg }}>
      <div style={{ fontSize: scale < 1 ? 7 : 24, fontWeight: 700, color: p.text, textAlign: "center", marginBottom: scale < 1 ? 8 : 24 }}>Contact Us</div>
      <div style={{ maxWidth: scale < 1 ? "100%" : 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: scale < 1 ? 3 : 12 }}>
        {["Name","Email","Message"].map((f, i) => (
          <div key={i} style={{ height: i === 2 ? (scale < 1 ? 14 : 60) : (scale < 1 ? 10 : 38), background: p.bgCard, border: `1px solid ${p.border}`, borderRadius: 6 }} />
        ))}
        <div style={{ background: p.btnBg, color: p.btnText, padding: scale < 1 ? "3px" : "10px", borderRadius: 6, fontSize: scale < 1 ? 5 : 14, fontWeight: 600, textAlign: "center" }}>Send Message</div>
      </div>
    </div>
  );
}
