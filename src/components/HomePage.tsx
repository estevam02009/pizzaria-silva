import React from "react";
import { Clock, Star, Phone } from "lucide-react";
import { useApp } from "../context/appContext";

export function HomePage() {
    const { dispatch } = useApp();

    const features = [
        {
            icon: Clock,
            title: "Entrega rápida",
            description: "Entregamos entre 30 - 45 minutos",
        },
        {
            icon: Star,
            title: "Ingredientes de qualidade",
            description: "Ingredientes frescos e de alta qualidade",
        },
        {
            icon: Phone,
            title: "Atualizações por WhatsApp",
            description: "Atualizações sobre o pedido por WhatsApp em tempo real",
        }
    ]

    return (
        <div>
            {/* Hero Section */}
            <section>
                <div>
                    <div>
                        <h1>Pizza Italiana</h1>
                        <span></span>
                    </div>
                </div>
            </section>
        </div>
    )
}