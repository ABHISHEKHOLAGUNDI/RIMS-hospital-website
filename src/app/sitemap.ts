import type { MetadataRoute } from "next";

const BASE_URL = "https://rimshospitalhathras.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/doctors`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/specialties`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE_URL}/facilities`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 },
    ];

    const specialtySlugs = [
        "orthopedics",
        "hair-transplantation",
        "plastic-surgery",
        "burns",
        "general-surgery",
        "medicine",
    ];

    const facilitySlugs = [
        "pharmacy",
        "sample-collection",
        "nursing",
        "old-age-care",
        "physiotherapy",
        "equipment-rental",
        "ambulance",
        "lab",
        "radiology",
    ];

    const specialtyPages = specialtySlugs.map((slug) => ({
        url: `${BASE_URL}/specialties/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const facilityPages = facilitySlugs.map((slug) => ({
        url: `${BASE_URL}/facilities/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...specialtyPages, ...facilityPages];
}
