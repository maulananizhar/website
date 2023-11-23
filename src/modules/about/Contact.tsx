import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Get In Touch
        </p>
        <p className="mb-1">
          You can reach me out via email at:{" "}
          <Link
            className="hover:text-cyan-700 hover:dark:text-cyan-500 duration-500 underline"
            href="mailto:maulananizhar27@gmail.com"
            target="_blank">
            maulananizhar27@gmail.com
          </Link>{" "}
          or via socials below:
        </p>
        <ul className="list-disc mx-6">
          <li>
            GitHub -{" "}
            <Link
              className="hover:text-cyan-700 hover:dark:text-cyan-500 duration-500 underline"
              href="https://github.com/maulananizhar"
              target="_blank">
              https://github.com/maulananizhar
            </Link>
          </li>
          <li>
            Instagram -{" "}
            <Link
              className="hover:text-cyan-700 hover:dark:text-cyan-500 duration-500 underline"
              href="https://instagram.com/maulananizhar_"
              target="_blank">
              https://instagram.com/maulananizhar_
            </Link>
          </li>
          <li>
            Twitter -{" "}
            <Link
              className="hover:text-cyan-700 hover:dark:text-cyan-500 duration-500 underline"
              href="https://twitter.com/lanaberg_"
              target="_blank">
              https://twitter.com/lanaberg_
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
