import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from 'app/lib/mdx';
import MDXContent from 'app/components/MDXContent';

export default async function Activation() {
  const { mdxSource, frontMatter } = await getMdxContent('activation');
  return (
    <div>
      <p>{frontMatter.content}</p>
      <MDXContent mdxSource={mdxSource} />
    </div>
  );
}
