import { EducationSlotData } from "@/components/ui/education-slot";
import { WorkSlotData } from "@/components/ui/work-slot";

export const workSlotData: WorkSlotData[] = [
    {
        id: "3",
        icon: "/logo/jpmc.png",
        company: "JPMorgan Chase, Corporate and Investment Bank",
        position: "Software Engineer",
        description: "Part of the Commmercial Card Team, where I designed and developed projects like Recurring Virtual Cards, Secure Email Service, etc.",
        timeframe: "Jan 2024 - Current",
    },
    {
        id: "2",
        icon: "/logo/jpmc.png",
        company: "JPMorgan Chase, Asset and Wealth Management",
        position: "Software Engineer Intern",
        description: "Interned with the Spectrum Portfolio Management Team, where I worked on migration of legacy monolithic projects to microservices architecture on AWS",
        timeframe: "Jun 2023 - Aug 2023",
    },
    {
        id: "1",
        icon: "/logo/gsoc.svg",
        company: "Google Summer of Code @ Emory University, BMI [NISYS Lab]",
        position: "Software Engineer, Machine Learning",
        description: "Worked on VisualRLComposer, a GUI for facilitating the experimentation of Reinforcement Learning using OpenAI Gym, Stable Baselines 3 and PyTorch.",
        timeframe: "May 2022 - Oct 2022",
    }
]

export const educationSlotData: EducationSlotData[] = [
    {
        id: "2",
        icon: "/logo/usc.png",
        college: "University of Southern California",
        degree: "Master of Science in Computer Science",
        timeframe: "2026 - 2028",
    },
    {
        id: "1",
        icon: "/logo/manipal.png",
        college: "Manipal University",
        degree: "Bachelor of Technology in Data Science",
        timeframe: "2020 - 2024",
    },
];

