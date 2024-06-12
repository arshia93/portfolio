import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from 'app/lib/mdx';
import MDXContent from 'app/components/MDXContent';

export default async function Retention() {
  const { mdxSource, frontMatter } = await getMdxContent('retention');
  return (
    <div>
      <p>{frontMatter.content}</p>
      <MDXContent mdxSource={mdxSource} />
    </div>
  );
}
