import Link from "next/link";

export default function Skillset() {
  return (
    <>
      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Skillset
        </p>
        <div className="flex flex-wrap">
          <div className="w-1/3 px-2">
            <div className="flex flex-col px-6 py-4 border h-full border-cyan-700 dark:border-cyan-500 border-opacity-40 text-lana-dark dark:text-lana-light rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 hover:-translate-y-2 group">
              <p className="text-2xl font-bold mb-3 group-hover:text-cyan-700 group-hover:dark:text-cyan-500 duration-500">
                Languages
              </p>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                Javascript
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                HTML CSS
              </Link>
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                Typescript
              </Link>
              <Link
                href="https://docs.oracle.com/en/java/"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                Java
              </Link>
              <Link
                href="https://www.php.net/docs.php"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                PHP
              </Link>
            </div>
          </div>
          <div className="w-1/3 px-2">
            <div className="flex flex-col px-6 py-4 border h-full border-cyan-700 dark:border-cyan-500 border-opacity-40 text-lana-dark dark:text-lana-light rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 hover:-translate-y-2 group">
              <p className="text-2xl font-bold mb-3 group-hover:text-cyan-700 group-hover:dark:text-cyan-500 duration-500">
                Frontend
              </p>
              <Link
                href="https://tailwindcss.com/docs"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                Tailwind CSS
              </Link>
              <Link
                href="https://react.dev/"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                React
              </Link>
              <Link
                href="https://nextjs.org/docs/app"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                Next
              </Link>
            </div>
          </div>
          <div className="w-1/3 px-2">
            <div className="flex flex-col px-6 py-4 border h-full border-cyan-700 dark:border-cyan-500 border-opacity-40 text-lana-dark dark:text-lana-light rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 hover:-translate-y-2 group">
              <p className="text-2xl font-bold mb-3 group-hover:text-cyan-700 group-hover:dark:text-cyan-500 duration-500">
                Backend
              </p>
              <Link
                href="https://nodejs.org/en/docs"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                NodeJS
              </Link>
              <Link
                href="https://dev.mysql.com/doc/"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                MySQL
              </Link>
              <Link
                href="https://www.postgresql.org/docs/"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                PostgreSQL
              </Link>
              <Link
                href="https://www.mongodb.com/docs/"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                MongoDB
              </Link>
              <Link
                href="https://firebase.google.com/docs?hl=id"
                target="_blank"
                className="w-fit mb-2 hover:text-cyan-700 hover:dark:text-cyan-500 duration-500">
                Firebase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
