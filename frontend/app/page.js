"use client";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  BarChart3,
  Globe,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import AISearchBar from "@/components/AISearchBar";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import TestimonialSlider from "@/components/TestimonialSlider";
import ChatBot from "@/components/ChatBot";
import FloatingCTA from "@/components/FloatingCTA";

const HeroMetrics = [
  { value: "4,000+", label: "Website Projects" },
  { value: "19+", label: "Years of Experience" },
  { value: "50+", label: "Skilled Employees" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section
        style={{
          position: "relative",
          padding: "90px 24px 24px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            flex: 1,
            borderRadius: 32,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: "4rem 2rem",
            boxShadow: "0 20px 40px rgba(10,17,40,0.1)",
          }}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay for contrast */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(10,17,40,0.9) 0%, rgba(10,17,40,0.5) 60%, rgba(10,17,40,0.2) 100%)",
              zIndex: 1,
            }}
          />

          {/* Content Container */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: 1400,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "4rem",
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ flex: "1 1 500px", maxWidth: 650 }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "white",
                  marginBottom: 24,
                  textShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                Empowering your Digital Growth with <span style={{ color: "var(--color-neon-cyan)" }}>Expert Solutions</span>
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1.15rem",
                  lineHeight: 1.6,
                  marginBottom: 40,
                  maxWidth: 500,
                }}
              >
                Ishiva blends smart marketing with powerful web development to help your brand grow by tailored solutions.
              </p>
              <Link href="/contact">
                <button
                  className="btn-primary"
                  style={{
                    padding: "1rem 2.5rem",
                    fontSize: "1.05rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                >
                  Get Started <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>

            {/* Right Metrics */}
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-end" }}>
              {HeroMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                  style={{
                    background: "rgba(28, 37, 65, 0.4)", // Slate Blue transparent
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(212, 175, 55, 0.2)", // Gold border
                    borderRadius: 16,
                    padding: "1.5rem 2rem",
                    width: "100%",
                    maxWidth: 320,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                  className="hero-metric-card"
                >
                  <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", marginBottom: 4, lineHeight: 1 }}>
                    {metric.value}
                  </h3>
                  <p style={{ color: "var(--color-neon-cyan)", fontSize: "0.95rem", fontWeight: 600 }}>
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ REMAINING SECTIONS ═══════ */}
      <Services />
      <AISearchBar />
      <ProcessTimeline />
      <CaseStudies />
      <TestimonialSlider />

      {/* ═══════ FINAL CTA ═══════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Ready to Build Your{" "}
              <span className="text-gradient">Digital Empire?</span>
            </h2>
            <p
              className="section-subtitle"
              style={{
                margin: "0 auto 2.5rem",
                maxWidth: 520,
              }}
            >
              Join 500+ businesses that trust Ishiva to power their digital growth.
              Let's create something extraordinary together.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact">
                <button
                  className="btn-primary"
                  style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    Start Your Project <ArrowRight size={18} />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <ChatBot />

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-floating-card { display: none !important; }
        }
      `}</style>
    </>
  );
}
