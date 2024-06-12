import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMdxContent(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content, { scope: data });

  return {
    mdxSource,
    frontMatter: data,
  };
}

