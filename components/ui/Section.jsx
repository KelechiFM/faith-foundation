import { cn } from "@/lib/utils";

export default function Section({ children, className, id, fullWidth = false }) {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", fullWidth ? "max-w-none" : "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
}
