import { Deploy } from "grommet-icons";
import WritingCard from "~/components/WritingCard";

export interface WritingInfo {
    title: string;
    date: string;
    icon: React.ReactNode;
    path: string;
    tags: string[];
}

export default function () {
    return [
        {
            title: "Personal Site",
            date: "2022-07-23",
            icon: <Deploy/>,
            path: "/writing/personal-site",
            tags: ["React", "Grommet", "TypeScript"],
        }
    ] as WritingInfo[]
}