import Image from 'next/image';

export function Footer() {
  return (
    <section>
      <ul className="font-sm mt-10 flex flex-col md:flex-row space-x-0 space-y-2 md:space-x-4 md:space-y-0 text-neutral-600 dark:text-neutral-200 ">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            target="_blank"
            href="https://www.linkedin.com/in/arshiamog/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>

            <p className="ml-2">Connect with me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            target="_blank"
            href="mailto:arshiamoghaddam93@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>

            <p className="ml-2">Email me</p>
          </a>
        </li>
      </ul>
      <p className="text-sm mt-10 text-neutral-500 dark:text-neutral-200">
        Built with ☕ in SF & SD
      </p>
    </section>
  );
}
