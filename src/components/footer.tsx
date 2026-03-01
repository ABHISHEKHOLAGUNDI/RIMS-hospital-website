"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
} from "lucide-react";
import { AnimatedLogo } from "@/components/animated-logo";

const patientLinks = [
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Specialties", href: "/specialties" },
    { name: "Facilities", href: "/facilities" },
    { name: "Pharmacy", href: "/facilities/pharmacy" },
    { name: "Lab Services", href: "/facilities/lab" },
];

const corporateLinks = [
    { name: "About Us", href: "/about" },
    { name: "Video Gallery", href: "/gallery" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
];

const excellenceLinks = [
    { name: "Medicine", href: "/specialties/medicine" },
    { name: "Orthopedics", href: "/specialties/orthopedics" },
    { name: "Plastic Surgery", href: "/specialties/plastic-surgery" },
    { name: "Burns Unit", href: "/specialties/burns" },
    { name: "General Surgery", href: "/specialties/general-surgery" },
    { name: "Hair Transplantation", href: "/specialties/hair-transplantation" },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            {/* Newsletter Section */}
            <div className="gradient-hero py-8 sm:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-white/80 mt-1 text-sm sm:text-base">
                                Stay updated with the latest health tips and hospital news.
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-xl min-w-0 sm:min-w-[260px] focus:bg-white/30"
                            />
                            <Button className="bg-white text-medical-blue hover:bg-white/90 rounded-xl px-4 sm:px-6 gap-2 shadow-soft shrink-0">
                                <Send className="w-4 h-4" />
                                <span className="hidden sm:inline">Subscribe</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-block mb-4 sm:mb-5">
                            <AnimatedLogo size="lg" />
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-4 sm:mb-6 max-w-sm text-sm">
                            We strive to provide responsive, compassionate & patient-centric
                            healthcare with a humanitarian approach.
                        </p>
                        <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-300">
                            <div className="flex items-start gap-2.5 sm:gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-medical-blue shrink-0" />
                                <span>Hathras, Ruheri, Mahmud Barsai, Uttar Pradesh 204101</span>
                            </div>
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <Phone className="w-4 h-4 text-medical-blue shrink-0" />
                                <a href="tel:9457302031" className="hover:text-medical-blue transition-colors">
                                    9457302031 / +91(9457302031)
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <Mail className="w-4 h-4 text-medical-blue shrink-0" />
                                <a href="mailto:Rimshospitalhathras@gmail.com" className="hover:text-medical-blue transition-colors break-all">
                                    Rimshospitalhathras@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <Clock className="w-4 h-4 text-medical-blue shrink-0" />
                                <span>Monday – Sunday, 24x7</span>
                            </div>
                        </div>
                    </div>

                    {/* For Patients */}
                    <div>
                        <h3 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-5 text-white">For Patients</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {patientLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-medical-blue transition-colors text-xs sm:text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div>
                        <h3 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-5 text-white">Corporate</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {corporateLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-medical-blue transition-colors text-xs sm:text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Centers of Excellence */}
                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-5 text-white">
                            Centers of Excellence
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {excellenceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-medical-blue transition-colors text-xs sm:text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                        <p className="text-slate-500 text-xs sm:text-sm">
                            © 2025 R.I.M.S Hospital. All rights reserved.
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-800 hover:bg-medical-blue flex items-center justify-center transition-all duration-200 hover:scale-110"
                                >
                                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
