// src/data/blogItems.ts
export interface Author {
  name: string;
  bio: string;
  image: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface BlogItemType {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  content: string; // HTML or Markdown content
  author: Author;
  readTime: string; // e.g., "5 min read"
  relatedPosts: string[]; // Array of related post slugs
}

export const blogItems: BlogItemType[] = [
  {
    title: 'Draw together with AI. ChatGPT DALLE',
    excerpt: 'The DALL·E image generator in ChatGPT has recently impressed me not just with its ability to create images from text, but also with how well it can finish a drawing based on a super simple sketch — the kind a kid could make.',
    image: '/img/blog/gpt-draw/cover.png',
    url: 'blog/gpt-draw',
    date: 'May 10, 2025',
    category: 'AI',
    tags: ['GPT', 'DALLE'],
    slug: 'gpt-draw',
    content: `
I decided to experiment a bit and doodled this goofy little monster:

<img src="/img/blog/gpt-draw/image1.png" />

Then I asked ChatGPT to complete the drawing.

The result? A colored version with all the original lines preserved. Pretty cool already! It even added a few extra details. For this kind of output in Stable Diffusion, you'd probably need extra tools like ControlNet.

<img src="/img/blog/gpt-draw/image2.png" />

I took it a step further and asked to make the monster fluffy — and voilà:

<img src="/img/blog/gpt-draw/image3.png" />

It turned out to be a pretty solid character! So I decided to play with lighting and asked the AI to place it in a dark room.

The result blew me away — it didn’t just swap the background. The lighting changed completely, and the fur edges got that subtle glow you’d expect in low light.

<img src="/img/blog/gpt-draw/image4.png" />
    `,
    author: {
      name: 'Alex Nazarov',
      bio: 'Full-Stack Developer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQELZBmq6tV54A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711828438037?e=1759968000&v=beta&t=aMNiftPOCD21L-L7OfniF15Q8biu6FQWiJLm4YPhIjo',
      social: {
        github: 'https://github.com/johnpeterson',
        linkedin: 'https://linkedin.com/in/johnpeterson',
        twitter: 'https://twitter.com/johnpeterson',
      },
    },
    readTime: '5 min read',
    relatedPosts: ['scaling-nodejs-docker', 'why-tailwindcss'],
  }
];