import type { Metadata } from "next";

const BASE_URL = "https://rimshospitalhathras.com";

export function generatePageMetadata({
    title,
    description,
    path,
    keywords = [],
    image,
}: {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    image?: string;
}): Metadata {
    const url = `${BASE_URL}${path}`;
    const ogImage = image || `${BASE_URL}/og-image.png`;

    return {
        title,
        description,
        keywords: [
            "RIMS Hospital",
            "Hathras hospital",
            "Rajput Institute of Medical Sciences",
            "hospital near me",
            "best hospital in Hathras",
            ...keywords,
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${title} | R.I.M.S Hospital`,
            description,
            url,
            siteName: "R.I.M.S Hospital - Rajput Institute of Medical Sciences",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${title} - R.I.M.S Hospital Hathras`,
                },
            ],
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | R.I.M.S Hospital`,
            description,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

// Hospital JSON-LD structured data (Schema.org)
export function getHospitalJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Hospital",
        name: "R.I.M.S Hospital",
        alternateName: "Rajput Institute of Medical Sciences",
        description:
            "R.I.M.S Hospital (Rajput Institute of Medical Sciences) is a premier multi-specialty hospital in Hathras, Uttar Pradesh offering 24x7 emergency care, orthopedics, plastic surgery, burns treatment, hair transplantation, and general medicine.",
        url: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
        image: `${BASE_URL}/og-image.png`,
        telephone: "+919457302031",
        email: "Rimshospitalhathras@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ruheri, Mahmud Barsai",
            addressLocality: "Hathras",
            addressRegion: "Uttar Pradesh",
            postalCode: "204101",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 27.5963,
            longitude: 78.0519,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
        medicalSpecialty: [
            "Orthopedics",
            "PlasticSurgery",
            "Emergency",
            "Dermatology",
            "GeneralPractice",
        ],
        availableService: [
            {
                "@type": "MedicalProcedure",
                name: "Joint Replacement Surgery",
                procedureType: "Surgical",
            },
            {
                "@type": "MedicalProcedure",
                name: "Hair Transplantation",
                procedureType: "Surgical",
            },
            {
                "@type": "MedicalProcedure",
                name: "Plastic & Reconstructive Surgery",
                procedureType: "Surgical",
            },
            {
                "@type": "MedicalProcedure",
                name: "Burns Treatment",
                procedureType: "Therapeutic",
            },
        ],
        hasMap: "https://www.google.com/maps?q=27.5963,78.0519",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            bestRating: "5",
            ratingCount: "150",
            reviewCount: "85",
        },
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
        isAccessibleForFree: false,
        sameAs: [
            "https://www.facebook.com/rimshospitalhathras",
            "https://www.instagram.com/rimshospitalhathras",
        ],
    };
}

// Doctor JSON-LD
export function getDoctorJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Anil Rajput",
        jobTitle: "Senior Surgeon",
        description:
            "Dr. Anil Rajput is a highly experienced surgeon specializing in orthopaedic surgery, plastic & reconstructive surgery, burns management, hair transplantation, and micro-vascular surgery at R.I.M.S Hospital, Hathras.",
        medicalSpecialty: [
            "Orthopedics",
            "PlasticSurgery",
            "Dermatology",
        ],
        telephone: "+919457302031",
        email: "Rimshospitalhathras@gmail.com",
        worksFor: {
            "@type": "Hospital",
            name: "R.I.M.S Hospital",
            url: BASE_URL,
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Hathras",
            addressRegion: "Uttar Pradesh",
            postalCode: "204101",
            addressCountry: "IN",
        },
        url: `${BASE_URL}/doctors`,
    };
}

// Local Business JSON-LD (for Google Maps / Local SEO)
export function getLocalBusinessJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "R.I.M.S Hospital - Rajput Institute of Medical Sciences",
        image: `${BASE_URL}/logo.png`,
        "@id": BASE_URL,
        url: BASE_URL,
        telephone: "+919457302031",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ruheri, Mahmud Barsai",
            addressLocality: "Hathras",
            addressRegion: "Uttar Pradesh",
            postalCode: "204101",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 27.5963,
            longitude: 78.0519,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            bestRating: "5",
            ratingCount: "150",
        },
    };
}

// Breadcrumb JSON-LD
export function getBreadcrumbJsonLd(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.url}`,
        })),
    };
}

// FAQ JSON-LD
export function getFaqJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What are the visiting hours at R.I.M.S Hospital?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "R.I.M.S Hospital is open 24 hours a day, 7 days a week. Our emergency services and pharmacy are available round the clock.",
                },
            },
            {
                "@type": "Question",
                name: "What specialties does R.I.M.S Hospital offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer Orthopedics & Joint Replacement, Hair Transplantation, Plastic & Reconstructive Surgery, Burns Treatment, General Surgery, and General Medicine.",
                },
            },
            {
                "@type": "Question",
                name: "How do I book an appointment at R.I.M.S Hospital?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can book an appointment by calling us at 9457302031, messaging us on WhatsApp, or filling out the contact form on our website.",
                },
            },
            {
                "@type": "Question",
                name: "Where is R.I.M.S Hospital located?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "R.I.M.S Hospital is located in Hathras, Ruheri, Mahmud Barsai, Uttar Pradesh 204101, India.",
                },
            },
            {
                "@type": "Question",
                name: "Does R.I.M.S Hospital have ambulance service?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide 24x7 ambulance service for emergency patient transport. Call 9457302031 for immediate assistance.",
                },
            },
        ],
    };
}
