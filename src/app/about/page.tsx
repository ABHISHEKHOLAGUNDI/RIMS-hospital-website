"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import {
    BedDouble,
    Stethoscope,
    Target,
    Eye,
    Heart,
    Users,
    Award,
    Shield,
} from "lucide-react";

const stats = [
    { icon: BedDouble, value: "45", label: "Critical Care Beds", color: "text-medical-blue", bg: "bg-medical-blue-light" },
    { icon: Stethoscope, value: "5", label: "Operation Theatres", color: "text-medical-emerald", bg: "bg-medical-emerald-light" },
    { icon: Users, value: "50", label: "Patient Beds", color: "text-cyan-600", bg: "bg-cyan-50" },
];

const values = [
    { icon: Heart, title: "Compassionate Care", desc: "Patient-first approach with warmth and empathy at every step." },
    { icon: Award, title: "Clinical Excellence", desc: "Highly qualified specialists with decades of combined experience." },
    { icon: Shield, title: "Safety First", desc: "Rigorous safety protocols and hygiene standards across all departments." },
    { icon: Users, title: "Community Focused", desc: "Serving Hathras and the surrounding region with accessible healthcare." },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About R.I.M.S Hospital"
                subtitle="Rajput Institute of Medical Sciences — Delivering quality healthcare to the community."
            />

            {/* Overview */}
            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <AnimatedSection>
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                                    Who We Are
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                                    R.I.M.S Hospital (Rajput Institute of Medical Sciences) is a premier healthcare
                                    facility located in Hathras, Ruheri, Uttar Pradesh. Our team of experienced
                                    doctors and healthcare professionals is dedicated to providing world-class
                                    medical care to every patient.
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                    With state-of-the-art facilities, advanced diagnostic tools, and a compassionate
                                    approach, we ensure that every visitor receives the highest quality treatment.
                                    We specialize in orthopedics, plastic surgery, burns management, hair
                                    transplantation, and general medicine.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                {stats.map((stat) => (
                                    <AnimatedCard key={stat.label}>
                                        <Card className="border-0 shadow-soft rounded-2xl">
                                            <CardContent className="p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                                                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.bg} rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0`}>
                                                    <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.color}`} />
                                                </div>
                                                <div>
                                                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                                                    <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-10 sm:py-16 md:py-24 gradient-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionHeading title="Our Mission & Vision" />
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
                        <AnimatedSection delay={0.1}>
                            <AnimatedCard>
                                <Card className="border-0 shadow-soft rounded-2xl h-full">
                                    <CardContent className="p-5 sm:p-8">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-blue-light rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5">
                                            <Target className="w-6 h-6 sm:w-7 sm:h-7 text-medical-blue" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Our Mission</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                            We strive to provide responsive, compassionate & patient-centric healthcare
                                            with a humanitarian approach. R.I.M.S Hospital envisions to be the
                                            healthcare provider of choice in this region.
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <AnimatedCard>
                                <Card className="border-0 shadow-soft rounded-2xl h-full">
                                    <CardContent className="p-5 sm:p-8">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-emerald-light rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5">
                                            <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-medical-emerald" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Our Vision</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                            R.I.M.S Hospital to provide World Class Quality Healthcare Services for all.
                                            We aim to set the standard of excellence in patient care, medical education,
                                            and community service.
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionHeading title="Our Core Values" subtitle="The principles that guide our care." />
                    </AnimatedSection>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        {values.map((val, i) => (
                            <AnimatedSection key={val.title} delay={i * 0.1}>
                                <AnimatedCard>
                                    <Card className="border-0 shadow-soft rounded-2xl h-full text-center">
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-medical-blue-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                                                <val.icon className="w-5 h-5 sm:w-7 sm:h-7 text-medical-blue" />
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-base">{val.title}</h3>
                                            <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed">{val.desc}</p>
                                        </CardContent>
                                    </Card>
                                </AnimatedCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
