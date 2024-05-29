import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  function Badge(props) {
    return (
      <a
        {...props}
        target="blank"
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      />
    );
  }
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey I'm arshia 👋🏼
      </h1>
      <p className="prose .anchor:after prose-neutral dark:prose-invert mb-4">
        I love creating new products, meeting new people, and exploring the
        world.
      </p>
      <p className="prose .anchor:after prose-neutral dark:prose-invert mb-4">
        I'm currently <Link href={'/recipes'}>building products</Link> as a
        product manager and with friends on nights and weekends.
      </p>
      <p className="prose .anchor:after prose-neutral dark:prose-invert mb-4">
        My work includes focus on variety of product opportunities including
        solving the <Link href={'/recipes/acquisition'}>acquisition</Link>,{' '}
        <Link href={'/recipes/activation'}>activation</Link>, and{' '}
        <Link href={'/recipes/retention'}>retention</Link> problem.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 my-8 mb-8">
        <Image
          src="/pitching.jpg"
          width={400}
          height={400}
          alt="Me pitching at Craft Venture's AI Hackathon for 1st place"
          className="rounded sm:w-full md:w-full"
        />
        <Image
          src="/headshot.jpeg"
          width={210}
          height={200}
          alt="A personal headshot photo"
          className="rounded w-full lg:w-[210] md:w-[210]"
        />
      </div>

      <p className="font-medium prose .anchor:after prose-neutral dark:prose-invert mb-4">
        Here's my journey so far:
      </p>
      <ul className="prose .anchor:after prose-neutral dark:prose-invert list-none">
        <li className="m-0, p-0, mx-0, px-0">
          <span className="font-medium">2001</span>: I moved to California from
          Iran at the age of eight.
        </li>
        <li className="m-0, p-0, mx-0, px-0">
          <span className="font-medium">2009-2012</span>: As a sophomore in high
          school I created YourTypeOfThing, a portal to find the latest music
          updated by the hour.
        </li>
        <li className="m-0, p-0, mx-0, px-0">
          <span className="font-medium">2012-2017</span>: I studied marketing at
          San Francisco State University and led marketing at StudySoup, a
          college note-taking marketplace (500 Startups Batch 16).
        </li>
        <li className="m-0, p-0, mx-0, px-0">
          <span className="font-medium">2017-2022</span>: I was the Founder and
          Head of Product at Trym, an in-home haircut marketplace. We provided
          thousands of haircuts, providing barbers an average of $5k/month in
          earnings.
        </li>
        <li className="m-0, p-0, mx-0, px-0">
          <span className="font-medium">2022-Today</span>: I've helped several
          talented teams with product at comapnies such as{' '}
          <Badge href="https://adly.com">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Adly logo"
              className="mr-1 inline-flex"
            >
              <use href="/adly-logo.png" />
            </svg>
            Adly
          </Badge>
          , scratchpad, and outdoorsy.
        </li>
      </ul>
      <ul className="font-sm mt-8 flex flex-col md:flex-row space-x-0 space-y-2 md:space-x-4 md:space-y-0 text-neutral-600 dark:text-neutral-200 ">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            target="_blank"
            href="https://www.linkedin.com/in/arshiamog/"
          >
            <Image
              src="/icons/arrow-up-right.svg"
              width={15}
              height={15}
              alt="Up arrow"
            />
            <p className="ml-2">Connect with me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            target="_blank"
            href="mailto:arshiamoghaddam93@gmail.com"
          >
            <Image
              src="/icons/arrow-up-right.svg"
              width={15}
              height={15}
              alt="Up arrow"
            />
            <p className="ml-2">Email me</p>
          </a>
        </li>
      </ul>
      {/* Built with coffee in SF/SD  */}
    </section>
  );
}
