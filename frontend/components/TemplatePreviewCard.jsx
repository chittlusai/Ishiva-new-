"use client";
import { motion } from "framer-motion";
import { Star, Gift } from "lucide-react";
import TemplateRenderer from "./TemplateRenderer";

// Renders a scaled-down CSS miniature of the full template inside a clipped card
export default function TemplatePreviewCard({ template, onClick, bizName }) {
  const isCustom = template.type === "custom";
  const isFree = !template.isPremium;
  const p = template.palette || {};
  const primaryColor = isCustom ? (template.colors?.primary || "#8B5CF6") : (p.primary || "#8B5CF6");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="tpl-card"
      style={{ cursor: "pointer" }}
    >
      {/* Miniature preview */}
      <div className="tpl-card-preview">
        {isCustom ? (
          /* Iframe-based preview for custom templates */
          <div className="tpl-card-iframe-wrap">
            <iframe
              src={template.previewUrl}
              title={template.name}
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
              style={{
                width: 1280,
                height: 900,
                transform: "scale(0.22)",
                transformOrigin: "top left",
                border: "none",
                pointerEvents: "none",
                display: "block",
              }}
            />
          </div>
        ) : (
          /* CSS miniature for generated templates */
          <div className="tpl-card-scaler">
            <TemplateRenderer template={template} scale={0.22} />
          </div>
        )}

        {/* FREE badge for non-premium templates */}
        {isFree && (
          <div className="tpl-free-badge">
            <Gift size={10} />
            FREE
          </div>
        )}

        {/* Hover overlay */}
        <div className="tpl-card-overlay">
          <div style={{ background: isCustom ? primaryColor : p.btnBg, color: "#fff", padding: "8px 20px", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600 }}>
            Preview Template
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div style={{ padding: "12px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-heading)" }}>
              {bizName ? <><span style={{ color: "var(--color-neon-cyan)" }}>{bizName}</span> · </> : null}
              {template.name}
            </h3>
            <p style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
              {isCustom ? template.niche || template.style : template.style}
            </p>
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "center", flexShrink: 0 }}>
            {isFree && (
              <span style={{
                fontSize: "0.6rem", padding: "2px 6px", borderRadius: 10,
                background: "rgba(16,185,129,0.15)", color: "#10B981",
                fontWeight: 700, letterSpacing: "0.04em",
              }}>
                FREE
              </span>
            )}
            <span style={{ fontSize: "0.65rem", padding: "2px 8px", borderRadius: 12, background: `${primaryColor}20`, color: primaryColor, fontWeight: 600, whiteSpace: "nowrap" }}>
              {template.category}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Star size={11} fill="#f59e0b" color="#f59e0b" />
          <span style={{ color: "#f59e0b", fontSize: "0.78rem", fontWeight: 600 }}>{template.rating}</span>
          <span style={{ color: "var(--color-text-muted)", fontSize: "0.7rem" }}>({Number(template.reviews).toLocaleString()})</span>
        </div>
      </div>
    </motion.div>
  );
}
