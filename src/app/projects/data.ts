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
        createdAt: "August 27, 2025",
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
        title: "Circles",
        subtitle: "Social media app for communities",
        excerpt: [
            "A social media app designed to foster community engagement and interaction through the concept of friend/community circles.",
        ],
        createdAt: "September 10, 2025",
        url: "https://github.com/mehulsinha73/Circles",
        urlLabel: "View Github",
        techStack: [
            "React Native",
            "Expo",
            "TypeScript",
            "Django",
        ],
        thumbnail: "/projects-images/circle.png",
        thumbnailAlt: "Circles Image"
    },
    {
        id: "3",
        title: "Abodewave",
        subtitle: "AI Saas to manage rental properties",
        excerpt: [
            "A SaaS platform that leverages AI to streamline rental property management, offering features like automated tenant procurement and screening, rent collection, and maintenance scheduling.",
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
        id: "4",
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
        id: "5",
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
        thumbnail: "/projects-images/blank.png",
        thumbnailAlt: "DescAI Image"
    }
]