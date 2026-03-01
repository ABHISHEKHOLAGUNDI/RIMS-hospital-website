"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";

interface SpecialtyData {
    title: string;
    description: string;
    highlights: string[];
    details: string;
    gradient: string;
}

export function SpecialtyContent({ specialty }: { specialty: SpecialtyData }) {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden gradient-hero py-14 sm:py-20 md:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 -right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white">
                    <Link
                        href="/specialties"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Specialties
                    </Link>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{specialty.title}</h1>
                    <p className="text-white/80 text-sm sm:text-lg max-w-3xl">{specialty.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
                        <path d="M0,48 C480,0 960,0 1440,48 L1440,60 L0,60 Z" fill="#f8fafc" />
                    </svg>
                </div>
            </section>

            {/* Content */}
            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
                        {/* Main */}
                        <div className="lg:col-span-3">
                            <AnimatedSection>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                                    About This Specialty
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg mb-6 sm:mb-8">
                                    {specialty.details}
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                                    Services & Treatments
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    {specialty.highlights.map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white shadow-soft"
                                        >
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-medical-emerald shrink-0" />
                                            <span className="text-xs sm:text-sm text-foreground">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2">
                            <AnimatedSection delay={0.3}>
                                <Card className="border-0 shadow-soft rounded-2xl lg:sticky lg:top-28">
                                    <CardContent className="p-5 sm:p-8">
                                        <h3 className="font-bold text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                                            Book a Consultation
                                        </h3>
                                        <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                                            Get expert advice from our specialists. Contact us to
                                            schedule an appointment.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                            <Badge className="bg-medical-blue-light text-medical-blue border-0 rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs">
                                                Available 24x7
                                            </Badge>
                                            <Badge className="bg-medical-emerald-light text-medical-emerald border-0 rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs">
                                                Expert Doctors
                                            </Badge>
                                        </div>
                                        <a href="tel:9457302031">
                                            <Button className="w-full rounded-xl gap-2 bg-medical-blue hover:bg-medical-blue/90 text-sm">
                                                <Phone className="w-4 h-4" />
                                                Call 9457302031
                                            </Button>
                                        </a>
                                        <Link href="/contact" className="block mt-2 sm:mt-3">
                                            <Button variant="outline" className="w-full rounded-xl text-sm">
                                                Contact Us Online
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
