"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    Menu,
    X,
    ChevronDown,
    Bone,
    Scissors,
    Flame,
    Syringe,
    Pill,
    Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/animated-logo";

const specialties = [
    { name: "Orthopedics & Joint Replacement", slug: "orthopedics", icon: Bone },
    { name: "Hair Transplantation", slug: "hair-transplantation", icon: Scissors },
    { name: "Plastic Surgery", slug: "plastic-surgery", icon: Heart },
    { name: "Burns Unit", slug: "burns", icon: Flame },
    { name: "General Surgery", slug: "general-surgery", icon: Syringe },
    { name: "Medicine", slug: "medicine", icon: Pill },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Specialties", href: "/specialties", hasDropdown: true },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
    const [mobileSpecOpen, setMobileSpecOpen] = useState(false);

    return (
        <>
            {/* Top bar */}
            <div className="bg-gradient-to-r from-medical-blue to-medical-cyan text-white py-1.5 sm:py-2 px-4 text-xs sm:text-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4 truncate">
                        <span className="hidden sm:inline truncate">📧 Rimshospitalhathras@gmail.com</span>
                        <span className="hidden lg:inline truncate">📍 Hathras, Ruheri, Uttar Pradesh 204101</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <span className="font-medium hidden xs:inline text-[11px] sm:text-sm">24x7 Emergency</span>
                        <a
                            href="tel:9457302031"
                            className="font-bold bg-white/20 px-2 sm:px-3 py-0.5 rounded-full hover:bg-white/30 transition-colors text-[11px] sm:text-sm whitespace-nowrap"
                        >
                            📞 9457302031
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border/50 shadow-soft">
                <div className="max-w-7xl mx-auto px-3 sm:px-6">
                    <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <AnimatedLogo size="md" />
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
                            {navLinks.map((link) =>
                                link.hasDropdown ? (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setSpecialtiesOpen(true)}
                                        onMouseLeave={() => setSpecialtiesOpen(false)}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-1 px-3 xl:px-4 py-2 rounded-xl text-sm font-medium text-foreground/80 hover:text-medical-blue hover:bg-medical-blue-light transition-all duration-200"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${specialtiesOpen ? "rotate-180" : ""}`} />
                                        </Link>
                                        <AnimatePresence>
                                            {specialtiesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-soft-xl border border-border/50 p-3 z-50"
                                                >
                                                    {specialties.map((s) => (
                                                        <Link
                                                            key={s.slug}
                                                            href={`/specialties/${s.slug}`}
                                                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-medical-blue-light transition-colors duration-200 group"
                                                        >
                                                            <div className="w-9 h-9 rounded-xl bg-medical-blue/10 flex items-center justify-center group-hover:bg-medical-blue/20 transition-colors">
                                                                <s.icon className="w-4 h-4 text-medical-blue" />
                                                            </div>
                                                            <span className="text-sm font-medium text-foreground/80 group-hover:text-medical-blue transition-colors">
                                                                {s.name}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="px-3 xl:px-4 py-2 rounded-xl text-sm font-medium text-foreground/80 hover:text-medical-blue hover:bg-medical-blue-light transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Emergency CTA + Mobile toggle */}
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <a href="tel:9457302031" className="hidden sm:flex">
                                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-soft gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4">
                                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span className="hidden md:inline">Emergency:</span>
                                    <span className="hidden sm:inline">9457302031</span>
                                </Button>
                            </a>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-1.5 sm:p-2 rounded-xl hover:bg-muted transition-colors"
                            >
                                {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-border/50 bg-white overflow-hidden"
                        >
                            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-0.5 sm:space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setMobileSpecOpen(!mobileSpecOpen)}
                                                    className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-foreground/80 hover:text-medical-blue hover:bg-medical-blue-light transition-all"
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSpecOpen ? "rotate-180" : ""}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileSpecOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-3 sm:ml-4 space-y-0.5 overflow-hidden"
                                                        >
                                                            {specialties.map((s) => (
                                                                <Link
                                                                    key={s.slug}
                                                                    href={`/specialties/${s.slug}`}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm text-muted-foreground hover:text-medical-blue hover:bg-medical-blue-light transition-all"
                                                                >
                                                                    <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                                    {s.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-foreground/80 hover:text-medical-blue hover:bg-medical-blue-light transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <a href="tel:9457302031" className="block mt-2 sm:mt-3">
                                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl gap-2 text-sm">
                                        <Phone className="w-4 h-4" />
                                        Emergency: 9457302031
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
