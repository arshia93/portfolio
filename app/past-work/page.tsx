import { getMdxContent } from 'app/lib/mdx';
import Link from 'next/link';

export const metadata = {
  title: 'Past Work',
  description:
    'My recipes for acquisition, activation, retention, and internal tools.',
};
export default async function PastWorkPage() {
  const { mdxSource, frontMatter } = await getMdxContent('activation');

  return (
    <section>
      <h1 className="font-medium text-xl mb-8 tracking-tighter">
        My past work
      </h1>
      <ul>
        <li className="prose .anchor:after prose-neutral dark:prose-invert mb-4">
          <Link href="/past-work/acquisition">Acquisition</Link>
        </li>
        <li className="prose .anchor:after prose-neutral dark:prose-invert mb-4">
          <Link href="/past-work/activation">Activation</Link>
        </li>
        <li className="prose .anchor:after prose-neutral dark:prose-invert mb-4">
          <Link href="/past-work/retention">Retention</Link>
        </li>
      </ul>
    </section>
  );
}
