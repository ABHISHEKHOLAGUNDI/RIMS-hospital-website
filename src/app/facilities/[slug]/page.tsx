import { notFound } from "next/navigation";
import { FacilityContent } from "./facility-content";

const facilitiesData: Record<string, {
    title: string;
    description: string;
    highlights: string[];
    details: string;
    gradient: string;
}> = {
    pharmacy: {
        title: "Pharmacy",
        description: "24/7 pharmacy service with a comprehensive range of medicines and healthcare products.",
        highlights: [
            "Available 24 hours, 7 days a week",
            "Wide range of medicines and drugs",
            "Prescription and OTC medications",
            "Competitive pricing",
            "Expert pharmacist consultation",
            "Emergency medicine availability",
        ],
        details: "Our pharmacy operates round-the-clock to ensure patients and their families have access to essential medicines at all times. We maintain a wide inventory of prescription drugs, over-the-counter medications, surgical supplies, and healthcare products to serve all your needs efficiently.",
        gradient: "from-blue-500 to-cyan-500",
    },
    "sample-collection": {
        title: "Sample Collection at Home",
        description: "24x7 doorstep sample collection for convenient, hygienic diagnostics.",
        highlights: [
            "24x7 doorstep collection",
            "Customized preventive health packages",
            "Vein finding machine for prick accuracy",
            "Reports delivered over WhatsApp",
            "Single-use collection kit for 100% hygiene",
            "Trained phlebotomists",
        ],
        details: "We bring laboratory services to your home with our 24x7 doorstep sample collection. Using advanced vein-finding technology for accurate pricks and single-use collection kits for 100% hygiene, we ensure a comfortable and safe experience. Customized preventive health packages are available, and reports are conveniently delivered via WhatsApp.",
        gradient: "from-purple-500 to-pink-500",
    },
    nursing: {
        title: "Nursing Services",
        description: "Professional post-operative and home nursing care for recovery and comfort.",
        highlights: [
            "Post-Operative Care",
            "Management of medicines",
            "Urinary Catheter Care",
            "Assistance in daily activities",
            "Wound dressing and care",
            "Vital signs monitoring",
        ],
        details: "Our nursing services provide comprehensive post-operative care including medicine management, urinary catheter care, wound dressing, and assistance with daily activities. Our trained nursing professionals ensure patients receive the best possible care during recovery, whether in the hospital or at home.",
        gradient: "from-rose-500 to-red-400",
    },
    "old-age-care": {
        title: "Old Age Care",
        description: "Compassionate elderly care with daily assistance and health monitoring.",
        highlights: [
            "Assistance in daily activities",
            "Monitoring overall health and vital signs",
            "Intake of medication on time",
            "Companionship and emotional support",
            "Mobility assistance",
            "Nutritional care and diet management",
        ],
        details: "Our Old Age Care service is designed to provide compassionate support for elderly patients. We assist with daily activities, monitor overall health and vital signs, ensure timely intake of medications, and provide companionship. Our goal is to maintain dignity and quality of life for our senior patients.",
        gradient: "from-orange-500 to-amber-500",
    },
    physiotherapy: {
        title: "Physiotherapy Service",
        description: "Rehabilitation and physiotherapy for recovery, mobility, and overall wellness.",
        highlights: [
            "Post-surgical rehabilitation",
            "Joint and muscle therapy",
            "Pain management",
            "Mobility restoration",
            "Sports injury recovery",
            "Home-based physiotherapy",
        ],
        details: "Our Physiotherapy department provides specialized rehabilitation services to help patients recover mobility and strength after surgery, injury, or illness. Using modern therapeutic techniques and equipment, our physiotherapists create personalized treatment plans for optimal recovery.",
        gradient: "from-emerald-500 to-teal-500",
    },
    "equipment-rental": {
        title: "Medical Equipment on Rent",
        description: "Affordable rental of essential medical equipment for home patient care.",
        highlights: [
            "Hospital beds",
            "Wheelchairs",
            "Oxygen concentrators",
            "Patient monitors",
            "Nebulizers",
            "Walking aids and crutches",
        ],
        details: "We offer a wide range of medical equipment on rent for patients who need continued care at home. From hospital beds and wheelchairs to oxygen concentrators and patient monitors, we ensure high-quality, sanitized equipment delivered to your doorstep at affordable rates.",
        gradient: "from-indigo-500 to-blue-500",
    },
    ambulance: {
        title: "Ambulance Service",
        description: "24x7 equipped ambulance service for emergency patient transportation.",
        highlights: [
            "24x7 availability",
            "Fully equipped vehicles",
            "Trained paramedic staff",
            "GPS-enabled tracking",
            "Basic and Advanced Life Support",
            "Fast response time",
        ],
        details: "Our ambulance service operates 24 hours a day, 7 days a week, ensuring patients can reach the hospital quickly in emergencies. Our ambulances are fully equipped with life support systems, and our paramedic staff is trained to provide critical care during transit.",
        gradient: "from-red-500 to-rose-500",
    },
    lab: {
        title: "Laboratory Services",
        description: "Comprehensive diagnostic laboratory services with accurate and timely results.",
        highlights: [
            "Full range of diagnostic tests",
            "Accurate and timely reports",
            "Advanced laboratory equipment",
            "Pathology services",
            "Blood bank services",
            "Preventive health check-ups",
        ],
        details: "Our Diagnostic Center provides a full range of laboratory services including blood tests, urine analysis, pathology, and more. Equipped with advanced laboratory instruments and staffed by experienced technicians, we deliver accurate results rapidly to assist in timely diagnosis and treatment.",
        gradient: "from-teal-500 to-cyan-500",
    },
    radiology: {
        title: "Radiology",
        description: "Advanced radiodiagnosis services for accurate and detailed medical imaging.",
        highlights: [
            "X-Ray services",
            "Ultrasound / Sonography",
            "CT Scan",
            "Digital imaging",
            "Fluoroscopy",
            "Portable X-Ray services",
        ],
        details: "Our Radiology department offers comprehensive radiodiagnosis services using state-of-the-art imaging equipment. From routine X-rays and ultrasounds to advanced CT scans, our radiologists provide accurate diagnostic imaging that is crucial for proper treatment planning.",
        gradient: "from-violet-500 to-purple-500",
    },
};

export function generateStaticParams() {
    return Object.keys(facilitiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const facility = facilitiesData[slug];
    if (!facility) return {};
    return {
        title: facility.title,
        description: facility.description,
    };
}

export default async function FacilityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const facility = facilitiesData[slug];
    if (!facility) notFound();
    return <FacilityContent facility={facility} />;
}
