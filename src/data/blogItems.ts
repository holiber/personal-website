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
    title: 'Draw with AI. ChatGPT Dalle',
    excerpt: 'Explore the power of React Hooks to manage state and side effects in functional components, with practical examples and best practices.',
    image: '/img/blog1.jpg',
    url: '/blog/mastering-react-hooks',
    date: 'May 10, 2025',
    category: 'React',
    tags: ['React', 'JavaScript', 'Frontend'],
    slug: 'mastering-react-hooks',
    content: `
      <p>React Hooks have revolutionized the way we write functional components in React. Introduced in React 16.8, Hooks allow developers to manage state and side effects without relying on class components. In this post, we'll explore the core Hooks, their use cases, and best practices.</p>
      <h2>Why Use Hooks?</h2>
      <p>Hooks simplify component logic by allowing you to reuse stateful behavior across components. They eliminate the complexity of class-based components and make code more readable and maintainable.</p>
      <ul>
        <li>Reusable logic with custom Hooks</li>
        <li>Easier state management with useState</li>
        <li>Side effect handling with useEffect</li>
        <li>Improved performance with useMemo and useCallback</li>
      </ul>
      <h3>Getting Started with useState</h3>
      <p>The <code>useState</code> Hook is the foundation of state management in functional components. Here's how to use it:</p>
      <ol>
        <li>Import useState from React.</li>
        <li>Declare a state variable and its setter function.</li>
        <li>Update the state using the setter function.</li>
      </ol>
      <blockquote>"Hooks allow you to write cleaner, more modular code without sacrificing functionality." – Dan Abramov</blockquote>
      <h2>Best Practices</h2>
      <p>To make the most of Hooks, follow these guidelines:</p>
      <ul>
        <li>Only call Hooks at the top level of your component.</li>
        <li>Don’t call Hooks inside loops, conditions, or nested functions.</li>
        <li>Use custom Hooks to share logic between components.</li>
      </ul>
      <p>By mastering Hooks, you can build more efficient and maintainable React applications. Stay tuned for more advanced Hook patterns in my next post!</p>
    `,
    author: {
      name: 'John Peterson',
      bio: 'Full-Stack Developer with a passion for clean code and coffee. I share insights on web development and tech trends.',
      image: '/img/male2.jpg',
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