import { useTheme } from "next-themes";
import Link from "next/link";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxMoon,
  RxSun,
  RxTwitterLogo,
} from "react-icons/rx";

export default function Aside() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="hidden md:block fixed bottom-0 left-20 z-10">
        <div className="flex flex-col gap-6">
          <Link
            href="https://github.com/maulananizhar"
            target="_blank"
            className="hover:-translate-y-1 group duration-500">
            <RxGithubLogo className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
          </Link>
          <Link
            href="https://instagram.com/maulananizhar_"
            target="_blank"
            className="hover:-translate-y-1 group duration-500">
            <RxInstagramLogo className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
          </Link>
          <Link
            href="https://twitter.com/lanaberg_"
            target="_blank"
            className="hover:-translate-y-1 group duration-500">
            <RxTwitterLogo className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
          </Link>
          <div className="w-6 h-6 hover:-translate-y-1 hover:cursor-pointer group duration-500">
            <RxSun
              className="absolute w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-cyan-700 dark:group-hover:text-cyan-500"
              onClick={() => setTheme("dark")}
            />
            <RxMoon
              className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-500"
              onClick={() => setTheme("light")}
            />
          </div>
          <div className="border h-32 w-0 mx-auto border-lana-dark dark:border-lana-light"></div>
        </div>
      </div>

      <div className="hidden md:block fixed bottom-0 right-20 z-10 w-6">
        <div className="flex flex-col gap-[10.5rem]">
          <Link
            href="mailto:maulananizhar27@gmail.com"
            target="_blank"
            className="font-mono text-xs hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 rotate-90">
            maulananizhar27@gmail.com
          </Link>
          <div className="border h-32 w-0 mx-auto border-lana-dark dark:border-lana-light"></div>
        </div>
      </div>
    </>
  );
}
