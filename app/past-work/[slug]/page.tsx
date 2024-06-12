import { getPastWorkBySlug } from 'app/db/pastWork';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateMetadata({ params }) {
  let post = await getPastWorkBySlug(params.slug);
  if (!post) {
    return;
  }

  let { title, summary: description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://arshia.io/pastWork/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function PastWorkPage({ params }) {
  let post = await getPastWorkBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <MDXRemote source={post.content} />
    </section>
  );
}
