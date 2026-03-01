"use client";

import Link from "next/link";
import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bone, Scissors, Heart, Flame, Syringe, Pill } from "lucide-react";

const specialties = [
    { name: "Orthopedics & Joint Replacement", slug: "orthopedics", icon: Bone, color: "from-blue-500 to-cyan-500", desc: "Comprehensive treatment for all orthopedic disorders including joint replacement surgery." },
    { name: "Hair Transplantation", slug: "hair-transplantation", icon: Scissors, color: "from-purple-500 to-pink-500", desc: "100% Successful Results with 25+ years of experience in hair restoration." },
    { name: "Plastic Surgery", slug: "plastic-surgery", icon: Heart, color: "from-rose-500 to-red-400", desc: "General plastic surgery, facial procedures, cosmetic enhancements and reconstructive surgery." },
    { name: "Burns Unit", slug: "burns", icon: Flame, color: "from-orange-500 to-amber-500", desc: "Dedicated tertiary level burns unit with emergency treatment and reconstructive surgery." },
    { name: "General Surgery", slug: "general-surgery", icon: Syringe, color: "from-emerald-500 to-teal-500", desc: "Wide range of general surgical procedures performed by experienced surgeons." },
    { name: "Medicine", slug: "medicine", icon: Pill, color: "from-indigo-500 to-blue-500", desc: "Extensive range of pharmaceutical products, lifesaving drugs and nutritional supplements." },
];

export default function SpecialtiesPage() {
    return (
        <>
            <PageHero
                title="Our Specialties"
                subtitle="Comprehensive medical care across multiple disciplines."
            />

            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionHeading
                            title="Centers of Excellence"
                            subtitle="Explore our specialized departments, each equipped with modern facilities and led by expert doctors."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {specialties.map((s, i) => (
                            <AnimatedSection key={s.slug} delay={i * 0.1}>
                                <AnimatedCard className="h-full">
                                    <Link href={`/specialties/${s.slug}`} className="block h-full">
                                        <Card className="border-0 shadow-soft rounded-2xl hover:shadow-soft-lg transition-all duration-300 h-full group">
                                            <CardContent className="p-5 sm:p-8">
                                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                                    <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                                </div>
                                                <h3 className="font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-medical-blue transition-colors">
                                                    {s.name}
                                                </h3>
                                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                                                    {s.desc}
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
