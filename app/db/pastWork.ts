import { sql } from '@vercel/postgres';

type Metadata = {
  title: string;
  summary: string;
};

type PastWork = {
  metadata: Metadata;
  slug: string;
  content: string;
};

export async function getPastWorks(): Promise<PastWork[]> {
  const works = await sql`
  SELECT slug, id, title, content, summary
  FROM past_work
  `;

  return works.rows.map((work) => ({
    metadata: {
      title: work.title,
      summary: work.summary,
    },
    slug: work.slug,
    content: work.content,
  }));
}

export async function getPastWorkBySlug(
  slug: string
): Promise<PastWork | null> {
  const {rows: [work]} = await sql`
    SELECT slug, id, title, content, summary
    FROM past_work
    WHERE slug = ${slug}
  `;

  if (!work) return null;

  return {
    metadata: {
      title: work.title,
      summary: work.summary,
    },
    slug: work.slug,
    content: work.content,
  };
}
