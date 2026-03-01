import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
    title: "Our Specialties",
    description:
        "Explore R.I.M.S Hospital's centers of excellence: Orthopedics & Joint Replacement, Hair Transplantation, Plastic Surgery, Burns Unit, General Surgery, and Medicine in Hathras, UP.",
    path: "/specialties",
    keywords: [
        "orthopedics Hathras",
        "joint replacement UP",
        "hair transplant hospital",
        "plastic surgery Hathras",
        "burns treatment",
        "general surgery",
        "medical specialties",
    ],
});

export default function SpecialtiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
