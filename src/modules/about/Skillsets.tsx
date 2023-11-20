import Skillset from "@/components/skillset/Skillset";
import Link from "next/link";

export default function Skillsets() {
  return (
    <>
      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Skillset
        </p>
        <p className="text-xl font-bold">Current Focus</p>
        <div className="flex flex-wrap justify-left my-5">
          <Skillset logo="nf-md-nodejs" text="NodeJS" />
          <Skillset logo="nf-md-language_typescript" text="TypeScript" />
          <Skillset logo="nf-seti-react" text="React" />
          <Skillset logo="nf-md-triangle_small_up" text="NextJS" />
          <Skillset logo="nf-md-tailwind" text="Tailwind" />
          <Skillset logo="nf-dev-postgresql" text="PostgreSQL" />
          <Skillset logo="nf-seti-prisma" text="Prisma" />
          <Skillset logo="nf-md-microsoft_visual_studio_code" text="VSCode" />
        </div>
        <p className="text-xl font-bold">Experience With</p>
        <div className="flex flex-wrap justify-left my-5">
          <Skillset logo="nf-md-language_html5" text="HTML" />
          <Skillset logo="nf-md-language_css3" text="CSS" />
          <Skillset logo="nf-md-language_javascript" text="JavaScript" />
          <Skillset logo="nf-md-language_java" text="Java" />
          <Skillset logo="nf-md-language_python" text="Python" />
          <Skillset logo="nf-md-language_php" text="PHP" />
          <Skillset logo="nf-md-language_cpp" text="C++" />
          <Skillset logo="nf-dev-jquery" text="JQuery" />
          <Skillset logo="nf-dev-mysql" text="MySQL" />
          <Skillset logo="nf-dev-mongodb" text="MongoDB" />
          <Skillset logo="nf-md-firebase" text="Firebase" />
          <Skillset logo="nf-dev-terminal" text="Bash" />
          <Skillset logo="nf-dev-vim" text="Vim" />
          <Skillset logo="nf-dev-unity_small" text="Unity" />
          <Skillset logo="nf-seti-godot" text="Godot" />
          <Skillset logo="nf-dev-git" text="Git" />
          <Skillset logo="nf-dev-github_badge" text="Github" />
        </div>
      </div>
    </>
  );
}
