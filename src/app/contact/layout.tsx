import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
    title: "Contact Us - Book Appointment",
    description:
        "Contact R.I.M.S Hospital in Hathras, UP: Call 9457302031, email Rimshospitalhathras@gmail.com, or WhatsApp for appointments. Located at Ruheri, Mahmud Barsai, Hathras 204101.",
    path: "/contact",
    keywords: [
        "contact RIMS hospital",
        "hospital phone number Hathras",
        "book appointment Hathras hospital",
        "RIMS hospital address",
        "hospital near me Hathras",
        "doctor appointment Hathras",
        "hospital directions",
    ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
