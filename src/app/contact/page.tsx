"use client";

import { useState, FormEvent } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Loader2,
    CheckCircle,
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        value: "Hathras, Ruheri, Mahmud Barsai, Uttar Pradesh 204101",
        color: "text-medical-blue",
        bg: "bg-medical-blue-light",
    },
    {
        icon: Phone,
        title: "Emergency",
        value: "9457302031",
        href: "tel:9457302031",
        color: "text-medical-emerald",
        bg: "bg-medical-emerald-light",
    },
    {
        icon: Mail,
        title: "Email",
        value: "Rimshospitalhathras@gmail.com",
        href: "mailto:Rimshospitalhathras@gmail.com",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Monday – Sunday, 24x7",
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
];

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000);
        }, 1500);
    };

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden gradient-hero py-16 sm:py-20 md:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 -right-10 w-60 h-60 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
                    <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto">
                        We&apos;re here to help. Reach out to us anytime.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
                        <path d="M0,48 C480,0 960,0 1440,48 L1440,60 L0,60 Z" fill="#f8fafc" />
                    </svg>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-10 sm:py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
                        {contactInfo.map((info, i) => (
                            <AnimatedSection key={info.title} delay={i * 0.1}>
                                <Card className="border-0 shadow-soft rounded-2xl h-full">
                                    <CardContent className="p-4 sm:p-6 text-center">
                                        <div className={`w-10 h-10 sm:w-14 sm:h-14 ${info.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4`}>
                                            <info.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${info.color}`} />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-base">{info.title}</h3>
                                        {info.href ? (
                                            <a href={info.href} className="text-[10px] sm:text-sm text-muted-foreground hover:text-medical-blue transition-colors break-all">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight">{info.value}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection>
                        <SectionHeading
                            title="Get in Touch"
                            subtitle="Fill out the form below and we'll get back to you as soon as possible."
                        />
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
                        {/* Form */}
                        <AnimatedSection delay={0.2}>
                            <Card className="border-0 shadow-soft-lg rounded-2xl">
                                <CardContent className="p-5 sm:p-8">
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                        <div>
                                            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="Your full name"
                                                required
                                                className="rounded-xl border-border/50 focus:border-medical-blue text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                                                Email Id
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                required
                                                className="rounded-xl border-border/50 focus:border-medical-blue text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="mobile" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                                                Mobile
                                            </label>
                                            <Input
                                                id="mobile"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                required
                                                className="rounded-xl border-border/50 focus:border-medical-blue text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="query" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                                                Please Type Your Query
                                            </label>
                                            <Textarea
                                                id="query"
                                                placeholder="How can we help you?"
                                                rows={4}
                                                required
                                                className="rounded-xl border-border/50 focus:border-medical-blue resize-none text-sm"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full rounded-xl bg-medical-blue hover:bg-medical-blue/90 gap-2 h-10 sm:h-12 text-sm sm:text-base"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : submitted ? (
                                                <>
                                                    <CheckCircle className="w-4 h-4" />
                                                    Message Sent!
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Submit
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Map */}
                        <AnimatedSection delay={0.3}>
                            <Card className="border-0 shadow-soft-lg rounded-2xl overflow-hidden h-full min-h-[350px] sm:min-h-[450px]">
                                <CardContent className="p-0 h-full">
                                    <iframe
                                        title="R.I.M.S Hospital Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14168.0!2d78.0540!3d27.5946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0x97a2dea2f39ecbd2!2sHathras%2C%20Uttar%20Pradesh%20204101!5e0!3m2!1sen!2sin!4v1709308400000"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: "350px" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
