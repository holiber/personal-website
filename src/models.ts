export interface ProjectItemType {
    title: string;
    slug: string,
    description: string;
    content: string;
    image: string;
    gallery?: string[];
    tags: string[];
    links: { icon: string; href: string }[];
    icon: string;
  }