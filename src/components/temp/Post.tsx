import Link from "next/link";

type PostsProps = {
  date: string;
  title: string;
  desc: string;
  url: string;
};

export default function Post({ date, title, desc, url }: PostsProps) {
  return (
    <>
      <Link href={url}>
        <div className="w-full py-5 px-6 border border-cyan-700 dark:border-cyan-500 border-opacity-40 text-cyan-700 dark:text-cyan-500 rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 group hover:-translate-y-2">
          <p className="dark:text-lana-light text-lana-dark font-mono opacity-80 mb-2">
            {date}
          </p>
          <p className="text-3xl font-sans dark:text-lana-light text-lana-dark group-hover:text-cyan-700 dark:group-hover:text-cyan-500 font-bold duration-500 mb-2">
            {title}
          </p>
          <p className="dark:text-lana-light text-lana-dark">{desc}</p>
        </div>
      </Link>
    </>
  );
}
