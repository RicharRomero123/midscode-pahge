"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import caracteristicaAnimation from "./caracteristica.json"; // Asegúrate de ajustar la ruta según la ubicación del archivo JSON
import { FaCode } from "react-icons/fa";
import { RiSeoLine } from "react-icons/ri";
import { SiGooglemarketingplatform } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { BiSupport } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";

type IconType = "FaCode" | "RiSeoLine" | "SiGooglemarketingplatform" | "DiResponsive" | "BiSupport" | "LuShoppingCart";

const iconRender = (val: IconType) => {
    switch (val) {
        case "FaCode":
            return <FaCode className="w-5 h-5" />;
        case "RiSeoLine":
            return <RiSeoLine className="w-5 h-5" />;
        case "SiGooglemarketingplatform":
            return <SiGooglemarketingplatform className="w-5 h-5" />;
        case "DiResponsive":
            return <DiResponsive className="w-5 h-5" />;
        case "BiSupport":
            return <BiSupport className="w-5 h-5" />;
        case "LuShoppingCart":
            return <LuShoppingCart className="w-5 h-5" />;
        default:
            return <>Sin Icono</>;
    }
};

interface FeatureItemProps {
    title: string;
    description: string;
    icon: IconType;
    color: string;
}

const FeatureItem = ({ title, description, icon, color }: FeatureItemProps) => {
    return (
        <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg space-y-3 flex flex-col items-center text-center">
            <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
                {iconRender(icon)}
            </span>
            <h1 className="text-lg font-semibold capitalize text-gray-900 dark:text-white">
                {title}
            </h1>
            <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                {description}
            </p>
        </div>
    );
};

const features: FeatureItemProps[] = [
    {
        title: "Desarrollo Web Rápido",
        description: "Creamos sitios web profesionales en tiempo récord utilizando las últimas tecnologías.",
        icon: "FaCode",
        color: "bg-sky-600"
    },
    {
        title: "Optimización SEO",
        description: "Mejora tu posicionamiento en los motores de búsqueda y aumenta tu visibilidad online.",
        icon: "RiSeoLine",
        color: "bg-indigo-600"
    },
    {
        title: "Marketing Digital",
        description: "Estrategias personalizadas para atraer y retener clientes a través de campañas efectivas.",
        icon: "SiGooglemarketingplatform",
        color: "bg-orange-600"
    },
    {
        title: "Diseño Responsivo",
        description: "Aseguramos que tu sitio web se vea y funcione perfectamente en todos los dispositivos.",
        icon: "DiResponsive",
        color: "bg-rose-600"
    },
    {
        title: "Soporte Continuo",
        description: "Ofrecemos soporte técnico y mantenimiento continuo para que tu sitio web esté siempre en su mejor forma.",
        icon: "BiSupport",
        color: "bg-emerald-600"
    },
    {
        title: "Integración de E-commerce",
        description: "Implementamos soluciones de comercio electrónico para llevar tu tienda online al siguiente nivel.",
        icon: "LuShoppingCart",
        color: "bg-pink-600"
    },
];

const Features = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: caracteristicaAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section id="caracteristica" className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
                    <div className="order-2 lg:order-1 lg:w-[55%] xl:w-3/5 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <FeatureItem key={index} {...feature} />
                        ))}
                    </div>
                    <div className="order-1 lg:order-2 flex-1 py-10 lg:py-8 space-y-6 max-w-xl mx-auto text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Lleva tu Negocio al Siguiente Nivel
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                            En Midscode, combinamos tecnología avanzada y estrategias de marketing digital para crear sitios web impresionantes y funcionales.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Lottie animationData={caracteristicaAnimation} style={{ width: 300, height: 300 }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
