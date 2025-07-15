import * as icon from "react-icons/fa6";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    thumbnail?: string;
    icon?: keyof typeof icon;
}