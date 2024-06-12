import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getPastWorks } from 'app/db/blog';

export const metadata = {
  title: 'Past Work',
  description: 'Read through my work on acquiring, activating, and retain users as a product builder.',
};

export default function WorkPage() {
  let allWork = getPastWorks();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my work
      </h1>
      {allWork
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((work) => (
          <Link
            key={work.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${work.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {work.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <Views slug={work.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
