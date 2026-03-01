import { ReactNode } from "react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    centered?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    centered = true,
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div
                className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-medical-blue to-medical-emerald ${centered ? "mx-auto" : ""}`}
            />
        </div>
    );
}
