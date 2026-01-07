import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProgramCard({ title, description, image, link }) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
            </div>
            <CardHeader>
                <CardTitle className="text-xl text-primary">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="pt-4">
                <Link href={link || "#"} className="w-full">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
