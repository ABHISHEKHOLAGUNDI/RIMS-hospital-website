import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
    title: "Gallery - Hospital Photos & Videos",
    description:
        "Take a virtual tour of R.I.M.S Hospital — view photos of our operation theatres, ICU, patient wards, laboratory, pharmacy, and more. Hathras, Uttar Pradesh.",
    path: "/gallery",
    keywords: [
        "hospital gallery",
        "RIMS hospital photos",
        "hospital Hathras images",
        "operation theatre photos",
        "hospital tour",
    ],
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
