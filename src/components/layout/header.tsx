"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Regulatory Strategy", href: "/services/regulatory-strategy" },
      { name: "CMC & Quality Compliance", href: "/services/cmc-quality" },
      { name: "FDA Submissions", href: "/services/fda-submissions" },
      { name: "Global Submissions", href: "/services/global-submissions" },
      { name: "Lifecycle Management", href: "/services/lifecycle-management" },
      { name: "Due Diligence", href: "/services/due-diligence" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredItem(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo2.png"
                  alt="Adelphi Biosciences"
                  width={207}
                  height={52}
                  className="h-16 w-auto object-contain"
                  priority
                  unoptimized
                />
                <div className={`hidden lg:flex flex-col border-l pl-3 transition-colors ${isScrolled ? 'border-gray-300' : 'border-white/30'
                  }`}>
                  <span className={`text-[11px] font-medium italic transition-colors leading-tight ${isScrolled ? 'text-gray-600' : 'text-white/80'
                    }`}>
                    Regulatory Expertise
                  </span>
                  <span className={`text-[11px] font-medium italic transition-colors leading-tight ${isScrolled ? 'text-gray-600' : 'text-white/80'
                    }`}>
                    for Pharma Innovation
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.children && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-1",
                      isScrolled
                        ? isActive
                          ? "text-azure"
                          : "text-charcoal hover:text-azure"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hasChildren && <ChevronDown className="w-4 h-4 relative z-10" />}

                    {/* Active/Hover Background */}
                    <motion.span
                      className={cn(
                        "absolute inset-0 rounded-xl transition-colors duration-300",
                        isScrolled
                          ? isActive
                            ? "bg-azure/10"
                            : "bg-transparent hover:bg-cloud"
                          : isActive
                            ? "bg-white/15"
                            : "bg-transparent hover:bg-white/10"
                      )}
                      layoutId={`navBackground-${item.name}`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && (
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-accent-teal)] transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/portal"
              className={cn(
                "group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300",
                isScrolled
                  ? "text-navy border border-navy/10 hover:bg-navy/5"
                  : "text-white border border-white/30 hover:bg-white/10"
              )}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Client Portal</span>
            </Link>

            <Link
              href="/contact"
              className={cn(
                "group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-500 overflow-hidden",
                isScrolled
                  ? "bg-gradient-to-r from-azure to-sapphire text-white shadow-lg shadow-azure/25 hover:shadow-xl hover:shadow-azure/30 hover:-translate-y-0.5"
                  : "bg-white text-navy hover:bg-white/95 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              )}
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Shimmer Effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden relative p-2.5 rounded-xl transition-all duration-300",
              isScrolled
                ? "text-charcoal hover:bg-cloud"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className={cn(
                  "mt-4 rounded-2xl p-5 border",
                  isScrolled
                    ? "bg-pearl border-border"
                    : "bg-white/10 backdrop-blur-xl border-white/10"
                )}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <nav className="flex flex-col gap-1">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200",
                            isScrolled
                              ? isActive
                                ? "text-azure bg-azure/10"
                                : "text-charcoal hover:text-azure hover:bg-cloud"
                              : isActive
                                ? "text-white bg-white/20"
                                : "text-white/90 hover:text-white hover:bg-white/10"
                          )}
                        >
                          {item.name}
                          <ArrowRight className={cn(
                            "w-4 h-4 transition-transform",
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                          )} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  className={cn(
                    "mt-5 pt-5 border-t",
                    isScrolled ? "border-border" : "border-white/10"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2.5 w-full px-6 py-4 bg-gradient-to-r from-azure to-sapphire text-white font-semibold rounded-xl shadow-lg shadow-azure/25 hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Trust Badge */}
                  <div className={cn(
                    "mt-4 flex items-center justify-center gap-2 text-xs",
                    isScrolled ? "text-silver" : "text-white/60"
                  )}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
                    <span>Free consultation • 24hr response</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
