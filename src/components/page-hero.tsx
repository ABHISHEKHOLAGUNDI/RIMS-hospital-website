"use client";

import { ReactNode } from "react";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="relative overflow-hidden gradient-hero py-14 sm:py-20 md:py-28">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 -right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 sm:w-60 h-40 sm:h-60 bg-white/8 rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
                )}
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
                    <path d="M0,48 C480,0 960,0 1440,48 L1440,60 L0,60 Z" fill="#f8fafc" />
                </svg>
            </div>
        </section>
    );
}
