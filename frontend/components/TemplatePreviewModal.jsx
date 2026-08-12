"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Tablet, Smartphone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import TemplateRenderer from "./TemplateRenderer";

export default function TemplatePreviewModal({ template, onClose, bizName }) {
  const [viewport, setViewport] = useState("desktop"); // desktop, tablet, mobile

  if (!template) return null;

  const isCustom = template.type === "custom";
  const isFree = !template.isPremium;
  const primaryColor = isCustom ? (template.colors?.primary || "#8B5CF6") : (template.palette?.primary || "#8B5CF6");
  const widths = { desktop: "100%", tablet: "768px", mobile: "375px" };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex", flexDirection: "column",
        }}
      >
        {/* Top bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "12px 24px", background: "rgba(20,18,15,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <h2 style={{ color: "white", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
              {bizName && <span style={{ color: "var(--color-neon-cyan)" }}>{bizName} — </span>}
              {template.name}
            </h2>
            <span style={{ fontSize: "0.72rem", padding: "2px 10px", borderRadius: 12, background: `${primaryColor}20`, color: primaryColor }}>
              {template.category}
            </span>
            {isCustom && template.niche && (
              <span style={{ fontSize: "0.72rem", padding: "2px 10px", borderRadius: 12, background: "rgba(255,255,255,0.06)", color: "var(--color-text-secondary)" }}>
                {template.niche}
              </span>
            )}
            {isFree && (
              <span style={{
                fontSize: "0.68rem", padding: "2px 10px", borderRadius: 12,
                background: "rgba(16,185,129,0.15)", color: "#10B981", fontWeight: 700,
              }}>
                FREE
              </span>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Viewport toggles */}
            <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 3 }}>
              {[
                { id: "desktop", Icon: Monitor },
                { id: "tablet", Icon: Tablet },
                { id: "mobile", Icon: Smartphone },
              ].map(({ id, Icon }) => (
                <button
                  key={id}
                  onClick={() => setViewport(id)}
                  style={{
                    background: viewport === id ? "rgba(168,85,247,0.2)" : "none",
                    border: "none", borderRadius: 6, padding: "6px 10px",
                    cursor: "pointer", color: viewport === id ? "white" : "var(--color-text-muted)",
                    transition: "all 0.2s",
                  }}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            {/* Use template button — preview only, no download */}
            <Link href={`/quotation?template=${encodeURIComponent(template.name)}&biz=${encodeURIComponent(bizName || "")}`}>
              <button className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.82rem" }}>
                Use This Template
              </button>
            </Link>

            <button
              onClick={onClose}
              style={{ background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 8, padding: 8, cursor: "pointer", color: "white", transition: "all 0.2s" }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Preview area */}
        <div style={{ flex: 1, overflow: "auto", display: "flex", justifyContent: "center", padding: "24px" }}>
          <motion.div
            layout
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: widths[viewport],
              maxWidth: "100%",
              background: isCustom ? (template.colors?.bg || "#fff") : (template.palette?.bg || "#0a0a0f"),
              borderRadius: viewport !== "desktop" ? 16 : 0,
              overflow: "hidden",
              boxShadow: viewport !== "desktop" ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
              border: viewport !== "desktop" ? "2px solid rgba(255,255,255,0.08)" : "none",
              height: isCustom ? "100%" : "auto",
            }}
          >
            {isCustom ? (
              /* Full-size iframe for custom templates */
              <iframe
                src={template.previewUrl}
                title={template.name}
                sandbox="allow-scripts allow-same-origin"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "80vh",
                  border: "none",
                  display: "block",
                  background: template.colors?.bg || "#fff",
                }}
              />
            ) : (
              <TemplateRenderer template={template} scale={1} />
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
