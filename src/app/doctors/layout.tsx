import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
    title: "Our Doctors - Dr. Anil Rajput",
    description:
        "Meet Dr. Anil Rajput — MBBS, MS, DNB, MCH, FICS, FICLS. Senior surgeon specializing in orthopedics, plastic surgery, burns, and hair transplantation at R.I.M.S Hospital Hathras.",
    path: "/doctors",
    keywords: [
        "Dr Anil Rajput",
        "best doctor Hathras",
        "orthopedic surgeon Hathras",
        "plastic surgeon Hathras UP",
        "hair transplant doctor Hathras",
        "burns specialist",
    ],
});

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
