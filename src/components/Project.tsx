import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

type ProjectProps = {
  title: string;
  subtitle: string;
  desc: string;
  stack: string[];
  url: string;
};

export default function Project({
  title,
  subtitle,
  desc,
  stack,
  url,
}: ProjectProps) {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 pb-4">
        <div className="flex flex-col py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40 hover:-translate-y-2 duration-500 flex-auto h-full">
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 60 60"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                />
              </svg>
              <Link href={url} target="_blank">
                <RxExternalLink className="w-6 h-6 text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500 duration-500" />
              </Link>
            </div>
            <div className="flex flex-col font-sans text-lana-dark dark:text-lana-light">
              <p className="font-bold mb-4">{title}</p>
              <p className="text-sm opacity-80 mb-4">{subtitle}</p>
              <p className="text-sm opacity-80">{desc}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs mt-auto text-lana-dark dark:text-lana-light">
            {stack.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
