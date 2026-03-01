"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    GraduationCap,
    Award,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

const qualifications = [
    "M.B.B.S.",
    "M.S.",
    "D.N.B.",
    "M.CH.",
    "F.I.C.S.",
    "F.I.C.L.S.",
];

export default function DoctorsPage() {
    return (
        <>
            <PageHero
                title="Our Doctors"
                subtitle="Meet the highly qualified medical professionals dedicated to your care."
            />

            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionHeading
                            title="Meet Our Specialists"
                            subtitle="Expert doctors committed to excellence in healthcare."
                        />
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            <AnimatedCard>
                                <Card className="border-0 shadow-soft-lg rounded-2xl sm:rounded-3xl overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-5">
                                            {/* Avatar side */}
                                            <div className="md:col-span-2 gradient-hero p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center text-white">
                                                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-white/20 flex items-center justify-center mb-3 sm:mb-5 shadow-soft-lg">
                                                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90">AR</span>
                                                </div>
                                                <h2 className="text-xl sm:text-2xl font-bold text-center">Dr. Anil Rajput</h2>
                                                <p className="text-white/80 text-xs sm:text-sm mt-1">Senior Surgeon</p>
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mt-3 sm:mt-4">
                                                    <Badge className="bg-white/20 text-white border-0 text-[10px] sm:text-xs">Orthopedics</Badge>
                                                    <Badge className="bg-white/20 text-white border-0 text-[10px] sm:text-xs">Plastic Surgery</Badge>
                                                    <Badge className="bg-white/20 text-white border-0 text-[10px] sm:text-xs">Burns</Badge>
                                                </div>
                                            </div>

                                            {/* Details side */}
                                            <div className="md:col-span-3 p-5 sm:p-8 md:p-12">
                                                <div className="mb-5 sm:mb-8">
                                                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-medical-blue-light rounded-lg sm:rounded-xl flex items-center justify-center">
                                                            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-medical-blue" />
                                                        </div>
                                                        <h3 className="font-semibold text-base sm:text-lg text-foreground">Qualifications</h3>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                        {qualifications.map((q) => (
                                                            <Badge
                                                                key={q}
                                                                variant="secondary"
                                                                className="rounded-lg sm:rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-sm bg-medical-blue-light text-medical-blue border-0"
                                                            >
                                                                {q}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mb-5 sm:mb-8">
                                                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-medical-emerald-light rounded-lg sm:rounded-xl flex items-center justify-center">
                                                            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-medical-emerald" />
                                                        </div>
                                                        <h3 className="font-semibold text-base sm:text-lg text-foreground">Expertise</h3>
                                                    </div>
                                                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                                        Dr. Anil Rajput is a highly experienced surgeon specializing in
                                                        orthopaedic surgery, plastic & reconstructive surgery, burns management,
                                                        hair transplantation, and micro-vascular surgery. With extensive
                                                        qualifications and years of dedicated service, he leads the surgical
                                                        team at R.I.M.S Hospital.
                                                    </p>
                                                </div>

                                                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-medical-blue shrink-0" />
                                                        <span>Available: Monday – Sunday (24x7)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-medical-blue shrink-0" />
                                                        <a href="tel:9457302031" className="hover:text-medical-blue transition-colors">
                                                            9457302031
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-medical-blue shrink-0" />
                                                        <a href="mailto:Rimshospitalhathras@gmail.com" className="hover:text-medical-blue transition-colors break-all">
                                                            Rimshospitalhathras@gmail.com
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
