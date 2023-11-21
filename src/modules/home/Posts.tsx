import Post from "@/components/post/Post";
import Skeleton from "@/components/post/Skeleton";
import { numberToDateString } from "@/libs/date";
import Link from "next/link";
import useSWR from "swr";

type DataValue = {
  date: number;
  title: string;
  desc: string;
  url: string;
};
type DataArray = {
  value: DataValue[];
};

export default function Posts() {
  const fetcher = (args: string) => fetch(args).then(res => res.json());
  const { data, isLoading, error } = useSWR(
    "https://raw.githubusercontent.com/lanakuge/website/master/src/_data/posts.json",
    fetcher
  );

  return (
    <>
      <div className="container px-4 md:px-36 lg:px-40 xl:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Latest posts
        </p>
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            data.map((value: DataValue, index: number) => (
              <>
                <Post
                  key={index}
                  date={numberToDateString(value.date)}
                  title={value.title}
                  desc={value.desc}
                  url={value.url}
                />
              </>
            ))
          )}
        </div>
        <Link
          href="/blog"
          className="inline-block font-mono text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 mt-4">
          View all posts &#10140;
        </Link>
      </div>
    </>
  );
}
