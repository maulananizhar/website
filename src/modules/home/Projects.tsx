import Project from "@/components/Project";

export default function Projects() {
  return (
    <>
      <div className="container px-4 md:px-36 lg:px-40 xl:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Some things i&apos;ve built
        </p>
        <div className="flex flex-wrap justify-evenly">
          <Project
            title="DanaKu"
            subtitle="Lorem ipsum dolor sit amet adipisicing elit."
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
        ratione labore aperiam quo quisquam. Qui, fugit corrupti
                    odit accusamus cum at odio est minima eveniet minus
                    voluptatum nihil necessitatibus eligendi!"
            stack={[
              "NodeJS",
              "React",
              "NextJS",
              "PostgreSQL",
              "HTML-CSS",
              "JWT",
            ]}
            url="/"
          />
          <Project
            title="Fast Fetcher"
            subtitle="Lorem ipsum dolor sit amet adipisicing elit."
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Tempore commodi ratione perspiciatis? Ducimus blanditiis
        aperiam, ipsam corrupti dolore, eos laboriosam velit
            possimus odit, reiciendis vel exercitationem architecto
            rerum. Harum in autem reiciendis ipsa fugiat, tenetur earum
            ut itaque perferendis optio."
            stack={["NodeJS", "React", "NextJS", "PostgreSQL", "Python", "JWT"]}
            url="/"
          />
          <Project
            title="Kawan Bot"
            subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing."
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nesciunt suscipit at quia hic quam pariatur enim, earum quas
        commodi labore in accusantium saepe recusandae quod dolorum
        molestias odit minima veniam corrupti nemo provident iure?
        Et?"
            stack={["Python", "React", "MongoDB", "Django", "HTML-CSS", "JWT"]}
            url="/"
          />
        </div>
        <a
          href="/projects"
          className="inline-block font-mono text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 mt-4">
          View all projects &#10140;
        </a>
      </div>
    </>
  );
}
