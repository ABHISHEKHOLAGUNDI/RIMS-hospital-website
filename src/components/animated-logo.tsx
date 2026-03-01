"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
    size?: "sm" | "md" | "lg";
    showText?: boolean;
}

export function AnimatedLogo({ size = "md", showText = true }: AnimatedLogoProps) {
    const sizeClasses = {
        sm: "w-8 h-8 sm:w-9 sm:h-9",
        md: "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12",
        lg: "w-12 h-12 sm:w-14 sm:h-14",
    };

    const textSizes = {
        sm: "text-sm sm:text-base",
        md: "text-base sm:text-lg md:text-xl",
        lg: "text-xl sm:text-2xl",
    };

    const subTextSizes = {
        sm: "text-[7px] sm:text-[8px]",
        md: "text-[8px] sm:text-[9px] md:text-xs",
        lg: "text-[9px] sm:text-xs",
    };

    return (
        <div className="flex items-center gap-2 sm:gap-3 group">
            {/* Animated Logo Icon */}
            <motion.div
                className={`${sizeClasses[size]} relative rounded-xl sm:rounded-2xl overflow-hidden shrink-0`}
                whileHover={{ rotate: [0, -5, 5, -3, 0], scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-medical-blue via-medical-cyan to-medical-emerald p-[2px] animate-spin-slow">
                    <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-white flex items-center justify-center overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="R.I.M.S Hospital Logo"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-0.5"
                            priority
                        />
                    </div>
                </div>

                {/* Pulse ring on hover */}
                <motion.div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-medical-blue/30"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.3, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </motion.div>

            {/* Text */}
            {showText && (
                <div className="flex flex-col">
                    <motion.span
                        className={`${textSizes[size]} font-extrabold tracking-tight leading-tight`}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-cyan">
                            R.I.M.S
                        </span>
                    </motion.span>
                    <motion.span
                        className={`${subTextSizes[size]} text-muted-foreground -mt-0.5 leading-tight font-medium tracking-wide hidden xs:block`}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Rajput Institute of Medical Sciences
                    </motion.span>
                </div>
            )}
        </div>
    );
}
