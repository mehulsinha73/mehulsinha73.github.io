import { ProjectCardData } from "@/components/ui/project-card";

export const projectData: ProjectCardData[] = [
    {
        id: "1",
        title: "My Portfolio",
        subtitle: "Yup! This very one!",
        excerpt: [
            "A portfolio showcasing my creative and technical skills through innovative design and interactive experiences.",
            "DM me to get my detailed CV."
        ],
        createdAt: "September 05, 2025",
        url: "https://github.com/mehulsinha73/mehulsinha73.github.io",
        urlLabel: "View Github",
        techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],
        thumbnail: "/projects-images/portfolio.png",
        thumbnailAlt: "My Portfolio Image"
    },
    {
        id: "2",
        title: "Abodewave",
        subtitle: "AI Saas to manage rental properties",
        excerpt: [
            "Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.",
            "Research conducted in the 1970s revealed that he’d designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium and varnished wood."
        ],
        createdAt: "June 18, 2025",
        url: "",
        urlLabel: "View Github",
        techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "DJango",
            "PostgreSQL",
            "BetterAuth"
        ],
        thumbnail: "/projects-images/abodewave.png",
        thumbnailAlt: "Adobewave Image"
    },
    {
        id: "3",
        title: "Andpods",
        subtitle: "Android app for Airpods settings",
        excerpt: [
            "Developed a simple android app to bring Apple-only Airpods settings to android.",
        ],
        createdAt: "November 23, 2024",
        url: "https://github.com/mehulsinha73/Andpods",
        urlLabel: "View Github",
        techStack: [
            "Kotlin",
            "Android SDK",
        ],
        thumbnail: "/projects-images/airpods.jpg",
        thumbnailAlt: "Andpods Image"
    },
    {
        id: "4",
        title: "DescAI",
        subtitle: "Chatbot to query group of websites",
        excerpt: [
            "Developed a LLM RAG-based Chatbot that scraped, processed, and generated an AI model based on data retrieved from a collection of websites.",
            "Used it on websites with convoluted and hidden layouts to obtain data based on my requirements."
        ],
        createdAt: "August 09, 2024",
        url: "https://github.com/mehulsinha73/DescAI",
        urlLabel: "View Github",
        techStack: [
            "Python",
            "LangChain",
            "ChromaDB",
            "Ollama",
            "OpenAI",
        ],
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&h=360&auto=format&fit=crop",
        thumbnailAlt: "DescAI Image"
    },
    {
        id: "5",
        title: "Circles",
        subtitle: "Social media app for communities",
        excerpt: [
            "Developed a LLM RAG-based Chatbot that scraped, processed, and generated an AI model based on data retrieved from a collection of websites.",
            "Used it on websites with convoluted and hidden layouts to obtain data based on my requirements."
        ],
        createdAt: "August 09, 2024",
        url: "https://github.com/mehulsinha73/DescAI",
        urlLabel: "View Github",
        techStack: [
            "React Native",
            "Expo",
            "TypeScript",
            "Django",
        ],
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&h=360&auto=format&fit=crop",
        thumbnailAlt: "DescAI Image"
    }
]