import Link from 'next/link';

export const metadata = {
  title: 'Recipes',
  description:
    'My recipes for acquisition, activation, retention, and internal tools.',
};
export default function RecipesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my recipes</h1>
      <p className="prose prose-neutral dark:prose-invert">
        select the area of interest below to view my recipes.
      </p>
      <ul>
        <li>
          <Link href={'/recipes/acquisition'}>acquisition</Link>
        </li>
        <li>
          <Link href={'/recipes/activation'}>activation</Link>
        </li>
        <li>
          <Link href={'/recipes/retention'}>retention</Link>
        </li>
        <li>
          <Link href={'/recipes/internal-tools'}>internal tools</Link>
        </li>
      </ul>
    </section>
  );
}
