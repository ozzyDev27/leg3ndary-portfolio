import ProjectHoverable from "@/components/ProjectHoverable";
import { ProjectPreviewProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

const colorVariants: { [key: string]: string[] } = {
    "purple-400": [
        "hover:shadow-purple-400",
        "group-hover:text-purple-400",
        "hover:text-purple-400",
        "group-hover:bg-purple-400",
    ],
    "red-500": [
        "hover:shadow-red-500",
        "group-hover:text-red-500",
        "hover:text-red-500",
        "group-hover:bg-red-500",
    ],
    "green-400": [
        "hover:shadow-green-400",
        "group-hover:text-green-400",
        "hover:text-green-400",
        "group-hover:bg-green-400",
    ],
    "cyan-300": [
        "hover:shadow-cyan-300",
        "group-hover:text-cyan-300",
        "hover:text-cyan-300",
        "group-hover:bg-cyan-300",
    ],
    "orange-500": [
        "hover:shadow-orange-500",
        "group-hover:text-orange-500",
        "hover:text-orange-500",
        "group-hover:bg-orange-500",
    ],
    "fuchsia-400": [
        "hover:shadow-fuchsia-400",
        "group-hover:text-fuchsia-400",
        "hover:text-fuchsia-400",
        "group-hover:bg-fuchsia-400",
    ],
    "amber-400": [
        "hover:shadow-amber-400",
        "group-hover:text-amber-400",
        "hover:text-amber-400",
        "group-hover:bg-amber-400",
    ],
    default: [
        "hover:shadow-blue-400",
        "group-hover:text-blue-400",
        "hover:text-blue-400",
        "group-hover:bg-blue-400",
    ],
};

export default function ProjectPreview({
    image,
    title,
    sub,
    description,
    icons,
    color,
    index,
}: ProjectPreviewProps) {
    const colorVariant = colorVariants[color] || colorVariants.default;
    return (
        <motion.li
            className="self-center list-none justify-self-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 * index, duration: 1.5 },
            }}
        >
            <div
                className={`group flex flex-col justify-center w-[380px] lg:w-[570px] p-10 bg-white shadow-2xl rounded-3xl hover:shadow-2xl transition ${colorVariant[0]} duration-1000`}
            >
                <Image
                    className="object-contain h-auto mx-auto rounded-md"
                    src={image.src}
                    width={image.width ? image.width : 100}
                    alt={image.alt}
                    loading={image.priority ? "eager" : "lazy"}
                    priority={image.priority}
                />
                <h2 className="p-2 mt-4 text-3xl font-black">{title}</h2>
                <h3
                    className={`p-2 font-medium transition-colors duration-1000 text-md ${colorVariant[1]}`}
                >
                    {sub}
                </h3>
                <p className="p-2 py-4 font-light">{description}</p>
                <div className="flex justify-center w-full mt-auto">
                    <div
                        className={`w-[1170px] h-[1px] bg-[#dddddd] ${colorVariant[3]} transition-colors duration-1000`}
                    />
                </div>
                <div className="flex py-6 place-content-evenly">
                    {icons.map((icon, index) => (
                        <ProjectHoverable
                            key={index}
                            image={icon.image}
                            alt={icon.alt}
                            link={icon.link}
                        />
                    ))}
                </div>
            </div>
        </motion.li>
    );
}
