import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from 'app/lib/mdx';
import MDXContent from 'app/components/MDXContent';

export default async function Acquisition() {
  const { mdxSource, frontMatter } = await getMdxContent('acquisition');
  return (
    <div>
      <p>{frontMatter.content}</p>
      <MDXContent mdxSource={mdxSource} />
    </div>
  );
}
