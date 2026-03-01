import { notFound } from "next/navigation";
import { SpecialtyContent } from "./specialty-content";

const specialtiesData: Record<string, {
    title: string;
    description: string;
    highlights: string[];
    details: string;
    gradient: string;
}> = {
    orthopedics: {
        title: "Orthopedics & Joint Replacement",
        description:
            "Provides treatment for all Orthopedic disorders including joint replacement surgery, fracture management, sports injuries, and spine-related conditions.",
        highlights: [
            "Total Knee Replacement",
            "Total Hip Replacement",
            "Fracture Management",
            "Sports Injury Treatment",
            "Spine Surgery",
            "Arthroscopy",
            "Ligament Reconstruction",
            "Pediatric Orthopedics",
        ],
        details:
            "Our Orthopedics department is equipped with the latest diagnostic and surgical tools to handle everything from simple fractures to complex joint replacements. Our surgeons bring decades of experience to ensure the best outcomes for our patients.",
        gradient: "from-blue-500 to-cyan-500",
    },
    "hair-transplantation": {
        title: "Hair Transplantation",
        description:
            "Advanced hair transplantation procedures with proven results and maximum patient comfort.",
        highlights: [
            "100% Successful Result",
            "100% Patient Comfort",
            "25+ Years Experience",
            "FUE Hair Transplant",
            "FUT Hair Transplant",
            "Beard & Eyebrow Transplant",
            "PRP Therapy for Hair",
            "Post-operative Care",
        ],
        details:
            "Our hair transplantation services are backed by 25+ years of experience and a 100% success rate. We use advanced techniques like FUE and FUT to deliver natural-looking results with minimal downtime. Patient comfort is our top priority throughout the process.",
        gradient: "from-purple-500 to-pink-500",
    },
    "plastic-surgery": {
        title: "Plastic Surgery",
        description:
            "Comprehensive plastic and reconstructive surgery services for cosmetic and medical needs.",
        highlights: [
            "General Plastic Surgery",
            "Facial Suturing / Scar Revision",
            "Burns Management",
            "Micro Vascular Surgery",
            "Hand Surgery",
            "Cosmetic Procedures",
            "Breast Augmentation / Reduction",
            "Rhinoplasty",
            "Lip Augmentation / Reduction",
            "Botox / Filler Injection",
            "PRP Therapy",
        ],
        details:
            "Our plastic surgery department offers a full spectrum of reconstructive and cosmetic procedures. From scar revision and burns management to rhinoplasty and botox treatments, our skilled surgeons employ the latest techniques to achieve optimal results with patient safety at the forefront.",
        gradient: "from-rose-500 to-red-400",
    },
    burns: {
        title: "Burns Unit",
        description:
            "Dedicated tertiary level burns unit providing comprehensive burn care from emergency treatment to rehabilitation.",
        highlights: [
            "Dedicated Tertiary Level Burns Unit",
            "Emergency Treatment",
            "Reconstructive Surgery",
            "Post-operative Rehabilitation",
            "Skin Grafting",
            "Contracture Release",
            "Scar Management",
            "Physiotherapy Support",
        ],
        details:
            "Our Burns Unit is one of the most well-equipped facilities in the region, providing emergency treatment, reconstructive surgery, and post-operative rehabilitation. We handle all degrees of burn injuries with a multidisciplinary approach to ensure the best possible recovery.",
        gradient: "from-orange-500 to-amber-500",
    },
    "general-surgery": {
        title: "General Surgery",
        description:
            "Expert surgical care across a wide range of general surgical procedures.",
        highlights: [
            "Appendectomy",
            "Hernia Repair",
            "Gallbladder Surgery",
            "Gastrointestinal Surgery",
            "Laparoscopic Procedures",
            "Abscess Drainage",
            "Minor Surgical Procedures",
            "Emergency Surgery",
        ],
        details:
            "Our General Surgery department is staffed by experienced surgeons capable of handling both routine and complex surgical procedures. We leverage modern surgical techniques including laparoscopy to ensure minimally invasive options, faster recovery, and the best outcomes.",
        gradient: "from-emerald-500 to-teal-500",
    },
    medicine: {
        title: "Medicine",
        description:
            "Extensive range of pharmaceutical and healthcare products for comprehensive patient care.",
        highlights: [
            "Pharmaceutical Products",
            "Surgical Products",
            "Mother & Child Care",
            "General Healthcare Products",
            "Lifesaving Drugs",
            "Nutritional Supplements",
            "Chronic Disease Management",
            "Preventive Healthcare",
        ],
        details:
            "Our Medicine department provides patients with an extensive range of pharmaceutical products, surgical products, mother and child care supplies, general healthcare products, lifesaving drugs, and nutritional supplements. We focus on both curative and preventive healthcare to serve the complete needs of our community.",
        gradient: "from-indigo-500 to-blue-500",
    },
};

export function generateStaticParams() {
    return Object.keys(specialtiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const specialty = specialtiesData[slug];
    if (!specialty) return {};
    return {
        title: specialty.title,
        description: specialty.description,
    };
}

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const specialty = specialtiesData[slug];
    if (!specialty) notFound();
    return <SpecialtyContent specialty={specialty} />;
}
