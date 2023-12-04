import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

type ProjectProps = {
  title: string;
  subtitle: string;
  githubLink: string;
  imgUrl: string;
  demoLink: string | null;
};

export default function Project({
  title,
  subtitle,
  githubLink,
  imgUrl,
  demoLink,
}: ProjectProps) {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="m-4 hover:-translate-y-1 duration-500 group">
          <Image
            src={imgUrl}
            // src="/projects/img/danaku.png"
            alt="image"
            width="920"
            height="520"
            className="aspect-video object-cover rounded-t-lg"
          />
          <div className="px-6 border-r border-l border-b border-cyan-700 dark:border-cyan-500 rounded-b-lg group-hover:bg-cyan-700 dark:group-hover:bg-cyan-500 dark:group-hover:bg-opacity-10 group-hover:bg-opacity-10 duration-500">
            <p className="pt-4 font-bold text-xl group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500">
              {title}
            </p>
            <p className="mt-2">{subtitle}</p>
            <hr className="border-cyan-700 dark:border-cyan-500 my-4" />
            <div className="flex mb-4 gap-4 justify-end">
              <Link
                href={githubLink}
                target="_blank"
                className="flex items-center leading-none gap-1 hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 hover:underline">
                Github <RxExternalLink className="text-lg" />
              </Link>
              {demoLink !== "#" ? (
                <Link
                  href={demoLink !== null ? demoLink : "#"}
                  target="_blank"
                  className="flex items-center leading-none gap-1 hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 hover:underline">
                  Demo <RxExternalLink className="text-lg" />
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
