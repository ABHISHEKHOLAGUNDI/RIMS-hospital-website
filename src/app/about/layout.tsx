import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
    title: "About Us",
    description:
        "Learn about R.I.M.S Hospital (Rajput Institute of Medical Sciences), a premier multi-specialty hospital in Hathras, UP. Our mission, vision, core values, and commitment to quality healthcare.",
    path: "/about",
    keywords: [
        "about RIMS hospital",
        "RIMS hospital history",
        "hospital mission vision",
        "healthcare Hathras",
        "Rajput Institute Medical Sciences",
    ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
