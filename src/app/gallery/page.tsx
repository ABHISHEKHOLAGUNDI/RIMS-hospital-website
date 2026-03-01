"use client";

import { useState } from "react";
import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Video, X, Building2, BedDouble, Stethoscope, FlaskConical, Pill, Ambulance, MessageSquare, HeartPulse } from "lucide-react";

const hospitalImages = [
    { id: 1, title: "Hospital Building", desc: "R.I.M.S Hospital Exterior View", icon: Building2, color: "from-sky-400 to-blue-600" },
    { id: 2, title: "Operation Theatre", desc: "State-of-the-art surgical suite", icon: HeartPulse, color: "from-emerald-400 to-teal-600" },
    { id: 3, title: "Reception Area", desc: "Welcoming hospital reception", icon: MessageSquare, color: "from-violet-400 to-purple-600" },
    { id: 4, title: "Patient Ward", desc: "Comfortable patient rooms", icon: BedDouble, color: "from-amber-400 to-orange-600" },
    { id: 5, title: "ICU", desc: "Advanced intensive care unit", icon: HeartPulse, color: "from-rose-400 to-red-600" },
    { id: 6, title: "Laboratory", desc: "Modern diagnostic lab", icon: FlaskConical, color: "from-indigo-400 to-blue-600" },
    { id: 7, title: "Pharmacy", desc: "24/7 pharmacy counter", icon: Pill, color: "from-teal-400 to-emerald-600" },
    { id: 8, title: "Ambulance", desc: "Fully equipped ambulance fleet", icon: Ambulance, color: "from-red-400 to-rose-600" },
    { id: 9, title: "Consultation Room", desc: "Private consultation rooms", icon: Stethoscope, color: "from-blue-400 to-indigo-600" },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof hospitalImages[0] | null>(null);
    const [tab, setTab] = useState<"images" | "videos">("images");

    return (
        <>
            <PageHero
                title="Gallery"
                subtitle="Take a virtual tour of our hospital and its world-class facilities."
            />

            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionHeading
                            title="Hospital Gallery"
                            subtitle="Explore our facilities through images and videos."
                        />
                    </AnimatedSection>

                    {/* Tabs */}
                    <AnimatedSection delay={0.1}>
                        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                            <Button
                                variant={tab === "images" ? "default" : "outline"}
                                className={`rounded-xl gap-1.5 sm:gap-2 px-4 sm:px-6 text-xs sm:text-sm ${tab === "images" ? "bg-medical-blue hover:bg-medical-blue/90" : ""}`}
                                onClick={() => setTab("images")}
                            >
                                <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Images
                            </Button>
                            <Button
                                variant={tab === "videos" ? "default" : "outline"}
                                className={`rounded-xl gap-1.5 sm:gap-2 px-4 sm:px-6 text-xs sm:text-sm ${tab === "videos" ? "bg-medical-blue hover:bg-medical-blue/90" : ""}`}
                                onClick={() => setTab("videos")}
                            >
                                <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Video Gallery
                            </Button>
                        </div>
                    </AnimatedSection>

                    {tab === "images" ? (
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                            {hospitalImages.map((img, i) => (
                                <AnimatedSection key={img.id} delay={i * 0.06}>
                                    <AnimatedCard>
                                        <Card
                                            className="border-0 shadow-soft rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group hover:shadow-soft-lg transition-all duration-300"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <CardContent className="p-0">
                                                <div className={`aspect-[4/3] bg-gradient-to-br ${img.color} flex items-center justify-center relative overflow-hidden`}>
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                                                            <ImageIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                                        </div>
                                                    </div>
                                                    <div className="text-center text-white/80">
                                                        <img.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-1 sm:mb-2 opacity-40" />
                                                        <p className="text-[10px] sm:text-sm font-medium">{img.title}</p>
                                                    </div>
                                                </div>
                                                <div className="p-2.5 sm:p-4">
                                                    <h3 className="font-semibold text-foreground text-xs sm:text-sm">{img.title}</h3>
                                                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 hidden sm:block">{img.desc}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </AnimatedCard>
                                </AnimatedSection>
                            ))}
                        </div>
                    ) : (
                        <AnimatedSection delay={0.2}>
                            <div className="max-w-3xl mx-auto text-center">
                                <Card className="border-0 shadow-soft rounded-2xl">
                                    <CardContent className="p-8 sm:p-12">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-medical-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                            <Video className="w-8 h-8 sm:w-10 sm:h-10 text-medical-blue" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                                            Video Gallery Coming Soon
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            We&apos;re preparing our video gallery to give you a virtual walkthrough of
                                            R.I.M.S Hospital. Stay tuned!
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedSection>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-lg sm:max-w-2xl p-0 rounded-2xl overflow-hidden border-0">
                    {selectedImage && (
                        <div>
                            <div className={`aspect-video bg-gradient-to-br ${selectedImage.color} flex items-center justify-center relative`}>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                </button>
                                <div className="text-center text-white">
                                    <selectedImage.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 opacity-50" />
                                    <p className="text-base sm:text-lg font-medium">{selectedImage.title}</p>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="font-bold text-lg sm:text-xl text-foreground">{selectedImage.title}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{selectedImage.desc}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
