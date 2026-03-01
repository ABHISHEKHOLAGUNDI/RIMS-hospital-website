"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  BedDouble,
  UserCheck,
  Clock,
  Star,
  Quote,
  Shield,
  Phone,
  Pill,
  Ambulance,
  TestTubes,
} from "lucide-react";

const stats = [
  {
    icon: BedDouble,
    value: "35+",
    label: "Bedded Hospital",
    color: "text-medical-blue",
    bg: "bg-medical-blue-light",
  },
  {
    icon: UserCheck,
    value: "5+",
    label: "Highly Qualified Doctors",
    color: "text-medical-emerald",
    bg: "bg-medical-emerald-light",
  },
  {
    icon: Clock,
    value: "24x7",
    label: "Blood Bank & Ambulances",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Star,
    value: "4.5+",
    label: "Ratings on Google & Social Sites",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

const ratings = [
  { platform: "Google", stars: 5, color: "text-blue-500" },
  { platform: "Practo", stars: 4, color: "text-green-500" },
  { platform: "Facebook", stars: 4, color: "text-blue-600" },
  { platform: "Ambition Box", stars: 4.5, color: "text-orange-500" },
];

const specialties = [
  { name: "Orthopedics & Joint Replacement", slug: "orthopedics", icon: "/icons/orthopedics.png" },
  { name: "Hair Transplantation", slug: "hair-transplantation", icon: "/icons/hair-transplant.png" },
  { name: "Plastic Surgery", slug: "plastic-surgery", icon: "/icons/plastic-surgery.png" },
  { name: "Burns Unit", slug: "burns", icon: "/icons/burns.png" },
  { name: "General Surgery", slug: "general-surgery", icon: "/icons/general-surgery.png" },
  { name: "Medicine", slug: "medicine", icon: "/icons/medicine.png" },
];

const facilities = [
  { name: "Pharmacy", slug: "pharmacy", icon: "/icons/pharmacy.png" },
  { name: "Ambulance Service", slug: "ambulance", icon: "/icons/ambulance.png", lucideIcon: Ambulance },
  { name: "Lab Services", slug: "lab", icon: "/icons/laboratory.png" },
  { name: "24x7 Emergency", slug: "", lucideIcon: Shield },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < Math.floor(count)
            ? "fill-amber-400 text-amber-400"
            : i < count
              ? "fill-amber-400/50 text-amber-400"
              : "text-slate-300"
            }`}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ========== VIDEO HERO SECTION ========== */}
      <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[92vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/hospital-hero-poster.jpg"
        >
          <source src="/videos/hospital-hero-optimized.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Badge className="bg-white/15 text-white border-white/25 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm mb-4 sm:mb-6 hover:bg-white/25 backdrop-blur-sm">
                🏥 Trusted Healthcare Since Establishment
              </Badge>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                <span className="block">R.I.M.S</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300">
                  Hospital
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-white/80 mt-2 sm:mt-3 tracking-normal">
                  Hathras, Ruheri — Uttar Pradesh
                </span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-white/75 leading-relaxed mb-6 sm:mb-10 max-w-2xl">
                We aim for a 100% success rate in all the services we offer —
                consultations, diagnostics, pharmacy services,
                inpatient treatments, surgeries, and follow-up care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/about">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-white/90 rounded-xl px-6 sm:px-8 shadow-lg gap-2 text-sm sm:text-base font-semibold h-11 sm:h-13"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:9457302031">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-6 sm:px-8 gap-2 text-sm sm:text-base font-semibold shadow-lg h-11 sm:h-13"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </motion.div>

            {/* Quick badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-12"
            >
              {["24x7 Emergency", "5+ Specialists", "35+ Beds", "100% Success Rate"].map((badge) => (
                <div
                  key={badge}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs text-white/80 font-medium"
                >
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fafc] to-transparent" />
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <AnimatedCard>
                  <Card className="border-0 shadow-soft rounded-2xl hover:shadow-soft-lg transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 ${stat.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4`}>
                        <stat.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${stat.color}`} />
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-0.5 sm:mb-1">
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-tight">{stat.label}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Platform Ratings */}
          <AnimatedSection delay={0.4} className="mt-8 sm:mt-12">
            <Card className="border-0 shadow-soft rounded-2xl">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h3 className="text-center font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-foreground">
                  Our Ratings Across Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {ratings.map((r) => (
                    <div key={r.platform} className="text-center">
                      <p className={`font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 ${r.color}`}>
                        {r.platform}
                      </p>
                      <div className="flex justify-center">
                        <StarRating count={r.stars} />
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                        {r.stars} / 5
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SPECIALTIES with custom icons ========== */}
      <section className="py-12 sm:py-16 md:py-24 gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <SectionHeading
              title="Our Specialties"
              subtitle="Comprehensive medical care across multiple disciplines, delivered by experienced specialists."
            />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {specialties.map((specialty, i) => (
              <AnimatedSection key={specialty.slug} delay={i * 0.1}>
                <AnimatedCard>
                  <Link href={`/specialties/${specialty.slug}`}>
                    <Card className="border-0 shadow-soft rounded-2xl hover:shadow-soft-lg transition-all duration-300 cursor-pointer group overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 relative">
                          <Image
                            src={specialty.icon}
                            alt={specialty.name}
                            fill
                            className="object-contain"
                            sizes="80px"
                          />
                        </div>
                        <h3 className="font-semibold text-xs sm:text-base text-foreground mb-1 sm:mb-2 group-hover:text-medical-blue transition-colors leading-tight">
                          {specialty.name}
                        </h3>
                        <div className="flex items-center justify-center gap-1 text-medical-blue text-[10px] sm:text-sm font-medium">
                          Learn more <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* ========== QUICK FACILITIES ========== */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <SectionHeading
              title="24x7 Care Services"
              subtitle="Round-the-clock facilities ensuring you always have access to quality healthcare."
            />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.1}>
                <AnimatedCard>
                  <Card className="border-0 shadow-soft rounded-2xl hover:shadow-soft-lg transition-all duration-300 text-center">
                    <CardContent className="p-4 sm:p-6">
                      {f.icon ? (
                        <div className="w-14 h-14 sm:w-18 sm:h-18 mx-auto mb-3 sm:mb-4 relative">
                          <Image
                            src={f.icon}
                            alt={f.name}
                            width={72}
                            height={72}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ) : f.lucideIcon ? (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-medical-blue-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <f.lucideIcon className="w-6 h-6 sm:w-8 sm:h-8 text-medical-blue" />
                        </div>
                      ) : null}
                      <h3 className="font-semibold text-foreground text-xs sm:text-sm">
                        {f.name}
                      </h3>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.5} className="text-center mt-8 sm:mt-10">
            <Link href="/facilities">
              <Button variant="outline" className="rounded-xl gap-2 px-6 text-sm">
                View All Facilities <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-12 sm:py-16 md:py-24 gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <SectionHeading
              title="What Our Patients Say"
              subtitle="Real stories from the people we've had the privilege to care for."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Card className="border-0 shadow-soft-lg rounded-2xl overflow-hidden">
                <CardContent className="p-6 sm:p-8 md:p-12">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-medical-blue-light flex items-center justify-center">
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-medical-blue" />
                    </div>
                  </div>
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <StarRating count={5} />
                  </div>
                  <p className="text-center text-foreground/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic">
                    &ldquo;Great hospital, wonderful and warm experience from
                    start to end. Appreciate Doctor&apos;s taking time to go
                    over the diagnosis clearly and treatment options. Neat and
                    clean hospital and staff are also good behaviour.&rdquo;
                  </p>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-medical-blue to-medical-emerald flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <span className="text-white font-bold text-base sm:text-lg">M</span>
                    </div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Mandeep Singh</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Patient</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <Card className="border-0 gradient-hero rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft-xl">
              <CardContent className="p-6 sm:p-8 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                </div>
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    Need Emergency Help?
                  </h2>
                  <p className="text-white/80 text-sm sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
                    Our emergency department is open 24/7. Don&apos;t hesitate to
                    reach out — we&apos;re here for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a href="tel:9457302031">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-white text-medical-blue hover:bg-white/90 rounded-xl px-6 sm:px-8 gap-2 font-semibold"
                      >
                        <Phone className="w-5 h-5" />
                        Call 9457302031
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white rounded-xl px-6 sm:px-8 gap-2 font-semibold border border-white/30"
                      >
                        Contact Us <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
