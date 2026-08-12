"use client";
import { useState, useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, Sparkles, ChevronLeft, ChevronRight, User, Gift, Layers } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useUser } from "@/lib/userContext";
import { ALL_TEMPLATES, TEMPLATE_CATEGORIES } from "@/data/templateGenerator";
import { COLOR_PALETTES } from "@/data/colorPalettes";

const TemplatePreviewCard = dynamic(() => import("@/components/TemplatePreviewCard"), { ssr: false });
const TemplatePreviewModal = dynamic(() => import("@/components/TemplatePreviewModal"), { ssr: false });

const TYPE_MAP = { Ecommerce:"Ecommerce", Portfolio:"Portfolio", Business:"Business", SaaS:"SaaS", Blog:"Blog", Other:"All" };
const PER_PAGE = 20;

export default function TemplatesPage() {
  const { userProfile, isLoaded } = useUser() || {};
  const bizName = userProfile?.businessName || "";
  const websiteType = userProfile?.websiteType || "";

  const [activeCategory, setActiveCategory] = useState("All");
  const [activePalette, setActivePalette] = useState("All");
  const [activeType, setActiveType] = useState("All"); // "All", "custom", "generated"
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [previewTpl, setPreviewTpl] = useState(null);
  const [personalised, setPersonalised] = useState(false);

  useEffect(() => {
    if (isLoaded && websiteType && TYPE_MAP[websiteType] && TYPE_MAP[websiteType] !== "All") {
      setActiveCategory(TYPE_MAP[websiteType]);
      setPersonalised(true);
    }
  }, [isLoaded, websiteType]);

  const filtered = useMemo(() => {
    return ALL_TEMPLATES.filter((t) => {
      const q = search.toLowerCase();
      const matchSearch = !q || t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q) || (t.style || "").toLowerCase().includes(q) || (t.niche || "").toLowerCase().includes(q);
      const matchCat = activeCategory === "All" || t.category === activeCategory;
      const matchPal = activePalette === "All" || t.style === activePalette;
      const matchType = activeType === "All" || t.type === activeType;
      return matchSearch && matchCat && matchPal && matchType;
    });
  }, [search, activeCategory, activePalette, activeType]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  useEffect(() => { setPage(1); }, [activeCategory, activePalette, activeType, search]);

  // Count per category
  const catCounts = useMemo(() => {
    const counts = {};
    TEMPLATE_CATEGORIES.forEach(c => { counts[c] = c === "All" ? ALL_TEMPLATES.length : ALL_TEMPLATES.filter(t => t.category === c).length; });
    return counts;
  }, []);

  // Count custom vs generated
  const customCount = useMemo(() => ALL_TEMPLATES.filter(t => t.type === "custom").length, []);
  const generatedCount = useMemo(() => ALL_TEMPLATES.filter(t => t.type === "generated").length, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72, minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ padding: "3.5rem 0 1.5rem", textAlign: "center", borderBottom: "1px solid var(--color-border-glass)" }}>
          <div className="section-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="section-label" style={{ justifyContent: "center" }}><Sparkles size={14} /> {ALL_TEMPLATES.length} Built-In Templates</div>
            <h1 className="section-title">
              {bizName ? <>Templates for <span className="text-gradient">{bizName}</span></> : <>Create Your <span className="text-gradient">Website</span></>}
            </h1>

            {isLoaded && bizName && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 30, padding: "7px 18px", marginBottom: 16 }}>
                <User size={14} color="var(--color-neon-purple)" />
                <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                  <strong style={{ color: "white" }}>{bizName}</strong>
                  {personalised && websiteType !== "Other" && <> · <strong style={{ color: "var(--color-neon-cyan)" }}>{websiteType}</strong></>}
                </span>
                {personalised && <button onClick={() => { setActiveCategory("All"); setPersonalised(false); }} style={{ fontSize: "0.72rem", color: "var(--color-neon-purple)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Show All</button>}
              </div>
            )}

            <p className="section-subtitle" style={{ margin: "0 auto 1.5rem", maxWidth: 560 }}>
              {customCount} custom-designed templates + {generatedCount} generated layouts. Preview inline. No third-party links.
            </p>

            <div style={{ maxWidth: 520, margin: "0 auto", position: "relative" }}>
              <Search size={18} style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", color: "var(--color-neon-purple)", pointerEvents: "none" }} />
              <input type="text" placeholder="Search templates..." value={search} onChange={(e) => setSearch(e.target.value)}
                style={{ width: "100%", padding: "13px 18px 13px 46px", borderRadius: 30, background: "rgba(255,255,255,0.04)", border: "1px solid var(--color-neon-purple)", color: "white", outline: "none", fontSize: "0.92rem" }} />
            </div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section style={{ padding: "2.5rem 0" }}>
          <div className="section-container" style={{ paddingTop: 0 }}>
            <div className="templates-layout">

              {/* Sidebar */}
              <aside className="filters-sidebar">
                {/* Template Type filter */}
                <div>
                  <h3 style={{ color: "var(--color-text-secondary)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Template Type</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {[
                      { key: "All", label: "All Templates", count: ALL_TEMPLATES.length, icon: <Layers size={12} /> },
                      { key: "custom", label: "Custom (Free)", count: customCount, icon: <Gift size={12} /> },
                      { key: "generated", label: "Generated", count: generatedCount, icon: <Sparkles size={12} /> },
                    ].map((item) => (
                      <button key={item.key} onClick={() => setActiveType(item.key)}
                        style={{ textAlign: "left", border: "none", cursor: "pointer", padding: "5px 8px", borderRadius: 8, fontSize: "0.8rem",
                          color: activeType === item.key ? "white" : "var(--color-text-secondary)",
                          background: activeType === item.key ? "rgba(16,185,129,0.12)" : "transparent",
                          fontWeight: activeType === item.key ? 600 : 400, transition: "all 0.18s", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          {activeType === item.key && <span style={{ color: "#10B981", marginRight: 1 }}>›</span>}
                          {item.icon} {item.label}
                        </span>
                        <span style={{ fontSize: "0.68rem", color: "var(--color-text-muted)" }}>{item.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category filter */}
                <div>
                  <h3 style={{ color: "var(--color-text-secondary)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Category</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {TEMPLATE_CATEGORIES.map((cat) => (
                      <button key={cat} onClick={() => { setActiveCategory(cat); setPersonalised(false); }}
                        style={{ textAlign: "left", border: "none", cursor: "pointer", padding: "5px 8px", borderRadius: 8, fontSize: "0.8rem",
                          color: activeCategory === cat ? "white" : "var(--color-text-secondary)",
                          background: activeCategory === cat ? "rgba(168,85,247,0.12)" : "transparent",
                          fontWeight: activeCategory === cat ? 600 : 400, transition: "all 0.18s", display: "flex", justifyContent: "space-between" }}>
                        <span>{activeCategory === cat && <span style={{ color: "var(--color-neon-purple)", marginRight: 3 }}>›</span>}{cat}</span>
                        <span style={{ fontSize: "0.68rem", color: "var(--color-text-muted)" }}>{catCounts[cat]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color theme filter (only for generated templates) */}
                {activeType !== "custom" && (
                  <div>
                    <h3 style={{ color: "var(--color-text-secondary)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Color Theme</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      <button onClick={() => setActivePalette("All")}
                        style={{ padding: "4px 10px", borderRadius: 20, fontSize: "0.72rem", border: `1px solid ${activePalette === "All" ? "var(--color-neon-purple)" : "var(--color-border-glass)"}`, background: activePalette === "All" ? "rgba(168,85,247,0.15)" : "transparent", color: activePalette === "All" ? "white" : "var(--color-text-secondary)", cursor: "pointer", transition: "all 0.18s" }}>
                        All
                      </button>
                      {COLOR_PALETTES.map((pal) => (
                        <button key={pal.id} onClick={() => setActivePalette(pal.name)}
                          style={{ padding: "4px 10px", borderRadius: 20, fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 4,
                            border: `1px solid ${activePalette === pal.name ? pal.primary : "var(--color-border-glass)"}`,
                            background: activePalette === pal.name ? `${pal.primary}20` : "transparent",
                            color: activePalette === pal.name ? "white" : "var(--color-text-secondary)", cursor: "pointer", transition: "all 0.18s" }}>
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: pal.primary, flexShrink: 0 }} />
                          {pal.name.split(" ").pop()}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!bizName && (
                  <div style={{ padding: 12, background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid var(--color-border-glass)" }}>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                      💡 <Link href="/login" style={{ color: "var(--color-neon-cyan)", textDecoration: "none" }}>Log in</Link> for personalized recommendations
                    </p>
                  </div>
                )}
              </aside>

              {/* Grid */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem" }}>
                    <strong style={{ color: "white" }}>{filtered.length}</strong> templates
                    {activeCategory !== "All" && <> in <strong style={{ color: "var(--color-neon-cyan)" }}>{activeCategory}</strong></>}
                    {activeType === "custom" && <> · <span style={{ color: "#10B981", fontWeight: 600 }}>Free Templates</span></>}
                  </p>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.78rem" }}>
                    Page {page} of {totalPages}
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
                  <AnimatePresence mode="popLayout">
                    {paginated.map((t) => (
                      <TemplatePreviewCard key={t.id} template={t} bizName={bizName} onClick={() => setPreviewTpl(t)} />
                    ))}
                  </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                  <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--color-text-muted)" }}>
                    <p style={{ fontSize: "1rem", marginBottom: 14 }}>No templates match.</p>
                    <button className="btn-outline" onClick={() => { setSearch(""); setActiveCategory("All"); setActivePalette("All"); setActiveType("All"); }}>Clear Filters</button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 32 }}>
                    <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--color-border-glass)", borderRadius: 8, padding: "8px 12px", cursor: page === 1 ? "not-allowed" : "pointer", color: "white", opacity: page === 1 ? 0.3 : 1, transition: "all 0.2s" }}>
                      <ChevronLeft size={16} />
                    </button>
                    {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                      let p;
                      if (totalPages <= 7) p = i + 1;
                      else if (page <= 4) p = i + 1;
                      else if (page >= totalPages - 3) p = totalPages - 6 + i;
                      else p = page - 3 + i;
                      return (
                        <button key={p} onClick={() => setPage(p)}
                          style={{ background: page === p ? "rgba(168,85,247,0.2)" : "rgba(255,255,255,0.04)", border: `1px solid ${page === p ? "var(--color-neon-purple)" : "var(--color-border-glass)"}`, borderRadius: 8, padding: "8px 14px", cursor: "pointer", color: page === p ? "white" : "var(--color-text-secondary)", fontSize: "0.85rem", fontWeight: page === p ? 700 : 400, transition: "all 0.2s" }}>
                          {p}
                        </button>
                      );
                    })}
                    <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--color-border-glass)", borderRadius: 8, padding: "8px 12px", cursor: page === totalPages ? "not-allowed" : "pointer", color: "white", opacity: page === totalPages ? 0.3 : 1, transition: "all 0.2s" }}>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Inline preview modal */}
      {previewTpl && <TemplatePreviewModal template={previewTpl} onClose={() => setPreviewTpl(null)} bizName={bizName} />}

      <style jsx global>{`
        .templates-layout { display: grid; grid-template-columns: 220px 1fr; gap: 2.5rem; align-items: start; }
        .filters-sidebar { display: flex; flex-direction: column; gap: 1.5rem; position: sticky; top: 88px; }
        .tpl-card {
          background: linear-gradient(135deg, rgba(20,18,15,0.9), rgba(10,10,12,0.95));
          border: 1px solid var(--color-border-glass); border-radius: 14px; overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
          will-change: transform;
        }
        .tpl-card:hover { transform: translateY(-5px) scale(1.01); border-color: rgba(168,85,247,0.35); box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(168,85,247,0.08); }
        .tpl-card-preview { position: relative; height: 180px; overflow: hidden; background: #0a0a0f; }
        .tpl-card-scaler { width: 1280px; transform: scale(0.22); transform-origin: top left; pointer-events: none; }
        .tpl-card-iframe-wrap { width: 1280px; height: 900px; transform: scale(0.22); transform-origin: top left; pointer-events: none; overflow: hidden; }
        .tpl-card-overlay {
          position: absolute; inset: 0; background: rgba(5,5,10,0.8); display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(3px);
        }
        .tpl-card:hover .tpl-card-overlay { opacity: 1; }
        .tpl-free-badge {
          position: absolute; top: 8px; left: 8px; z-index: 2;
          display: inline-flex; align-items: center; gap: 3px;
          background: linear-gradient(135deg, #10B981, #059669); color: white;
          font-size: 0.62rem; font-weight: 800; letter-spacing: 0.06em;
          padding: 3px 8px; border-radius: 6;
          box-shadow: 0 2px 8px rgba(16,185,129,0.3);
        }
        @media (max-width: 900px) {
          .templates-layout { grid-template-columns: 1fr !important; }
          .filters-sidebar { position: static; flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
    </>
  );
}
