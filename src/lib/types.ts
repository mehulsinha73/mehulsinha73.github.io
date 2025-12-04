import { TocItem } from "remark-flexible-toc";

type Post = {
    slug: string;
    content: React.ReactNode;
    data: Frontmatter;
    scope: Scope;
};

type Scope = {
    readingTime: string;
    toc?: TocItem[];
};

type Frontmatter = {
    title: string;
    description: string;
    created: Date;
    lastModified?: Date;
    tags: string[];
};

export type { Post, Scope, Frontmatter };