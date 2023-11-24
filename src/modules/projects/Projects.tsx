import Project from "@/components/projects/Project";
import useSWR from "swr";

type DataValue = {
  title: string;
  subtitle: string;
  githubLink: string;
  demoLink: string | null;
};

export default function Projects() {
  const fetcher = (args: string) => fetch(args).then(res => res.json());
  const { data, isLoading, error } = useSWR(
    "https://raw.githubusercontent.com/maulananizhar/website/master/src/_data/projects.json",
    fetcher
  );

  return (
    <div className="container px-4 md:px-36 xl:px-48 my-16">
      <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-8">
        Projects
      </p>
      <div className="flex flex-wrap">
        {isLoading ? (
          <></>
        ) : (
          data.map((value: DataValue, index: number) => (
            <>
              <Project
                key={index}
                title={value.title}
                subtitle={value.subtitle}
                githubLink={value.githubLink}
                demoLink={value.demoLink}
              />
            </>
          ))
        )}
      </div>
    </div>
  );
}
