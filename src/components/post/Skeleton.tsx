import Link from "next/link";

export default function Skeleton() {
  return (
    <>
      <Link href="/">
        <div className="w-full py-5 px-6 border border-cyan-700 dark:border-cyan-500 border-opacity-40 text-cyan-700 dark:text-cyan-500 rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 group hover:-translate-y-2 animate-pulse">
          <div className="dark:text-lana-light text-lana-dark font-mono opacity-80 mb-2">
            <div className="h-4 w-1/6 bg-slate-700 rounded"></div>
          </div>
          <div className="text-3xl font-sans dark:text-lana-light text-lana-dark group-hover:text-cyan-700 dark:group-hover:text-cyan-500 font-bold duration-500 mb-2">
            <div className="h-6 w-1/2 bg-slate-700 rounded"></div>
          </div>
          <div className="dark:text-lana-light text-lana-dark">
            <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
          </div>
        </div>
      </Link>
    </>
  );
}
