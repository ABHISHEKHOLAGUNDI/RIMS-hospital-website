"use client";

import Link from "next/link";
import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowRight,
    Pill,
    TestTubes,
    Stethoscope,
    Heart,
    Dumbbell,
    Wrench,
    Ambulance,
    FlaskConical,
    ScanLine,
} from "lucide-react";

const facilities = [
    { name: "Pharmacy", slug: "pharmacy", icon: Pill, desc: "24/7 pharmacy service with a comprehensive range of medicines.", color: "from-blue-500 to-cyan-500" },
    { name: "Sample Collection at Home", slug: "sample-collection", icon: TestTubes, desc: "24x7 doorstep sample collection for diagnostics.", color: "from-purple-500 to-pink-500" },
    { name: "Nursing Services", slug: "nursing", icon: Stethoscope, desc: "Professional post-operative and palliative nursing care.", color: "from-rose-500 to-red-400" },
    { name: "Old Age Care", slug: "old-age-care", icon: Heart, desc: "Compassionate elderly care with daily activity assistance.", color: "from-orange-500 to-amber-500" },
    { name: "Physiotherapy Service", slug: "physiotherapy", icon: Dumbbell, desc: "Rehabilitation and physiotherapy for recovery and wellness.", color: "from-emerald-500 to-teal-500" },
    { name: "Medical Equipment on Rent", slug: "equipment-rental", icon: Wrench, desc: "Rent medical equipment for home-based patient care.", color: "from-indigo-500 to-blue-500" },
    { name: "Ambulance Service", slug: "ambulance", icon: Ambulance, desc: "24x7 ambulance service for emergency patient transport.", color: "from-red-500 to-rose-500" },
    { name: "Laboratory Services", slug: "lab", icon: FlaskConical, desc: "Full diagnostic lab services with accurate, timely reports.", color: "from-teal-500 to-cyan-500" },
    { name: "Radiology", slug: "radiology", icon: ScanLine, desc: "Advanced radiodiagnosis services for precise imaging.", color: "from-violet-500 to-purple-500" },
];

export default function FacilitiesPage() {
    return (
        <>
            <PageHero
                title="Our Facilities"
                subtitle="24x7 care services ensuring access to quality healthcare anytime."
            />

            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionHeading
                            title="24x7 Care Services"
                            subtitle="From pharmacy to ambulance, we provide round-the-clock services for complete care."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {facilities.map((f, i) => (
                            <AnimatedSection key={f.slug} delay={i * 0.06}>
                                <AnimatedCard className="h-full">
                                    <Link href={`/facilities/${f.slug}`} className="block h-full">
                                        <Card className="border-0 shadow-soft rounded-2xl hover:shadow-soft-lg transition-all duration-300 h-full group">
                                            <CardContent className="p-5 sm:p-8">
                                                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                                    <f.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <h3 className="font-bold text-sm sm:text-lg text-foreground mb-1.5 sm:mb-2 group-hover:text-medical-blue transition-colors">
                                                    {f.name}
                                                </h3>
                                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                                                    {f.desc}
                                                </p>
                                                <div className="flex items-center gap-1 text-medical-blue text-xs sm:text-sm font-medium">
                                                    Learn more <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </AnimatedCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
