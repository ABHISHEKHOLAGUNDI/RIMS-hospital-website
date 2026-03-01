import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
    title: "Hospital Facilities & Services",
    description:
        "24x7 care services at R.I.M.S Hospital: Pharmacy, Home Sample Collection, Nursing Services, Old Age Care, Physiotherapy, Equipment Rental, Ambulance, Laboratory, and Radiology in Hathras.",
    path: "/facilities",
    keywords: [
        "hospital facilities Hathras",
        "pharmacy 24 hours",
        "ambulance service Hathras",
        "laboratory services",
        "physiotherapy",
        "home sample collection",
        "medical equipment rental",
        "radiology services",
    ],
});

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
