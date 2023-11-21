import Link from "next/link";

export default function Introduction() {
  return (
    <>
      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          About me
        </p>
        <p className="font-sans text-6xl font-bold mb-6">Nizhar Maulana</p>
        <p className="font-sans mb-4">
          Hi there! I&apos;m Nizhar Maulana, often referred to as Nizhar or
          Nijar. Hailing from the serene town of Depok in West Java, Indonesia,
          I&apos;m a 19 year old individual with a passion for web development.
          My academic journey led me to majoring in Informatics and Computer
          Engineering Education,{" "}
          <Link
            href="https://ft.unj.ac.id/ptik/"
            target="_blank"
            className="hover:text-cyan-700 hover:dark:text-cyan-500 duration-500 underline">
            Jakarta State University
          </Link>
          .
        </p>
        <p className="font-sans mb-14">
          My venture into the realm of web development commenced in 2022,
          primarily delving into the intricacies of C++. However, my current
          focus involves an immersive exploration of JavaScript, Node.js, and
          React. As I navigate the ever-evolving landscape of programming
          languages, I am driven by the enthusiasm to deepen my understanding of
          web development and contribute meaningfully to this dynamic field.
        </p>
        <a
          href="mailto:maulananizhar27@gmail.com"
          target="_blank"
          className="font-mono py-5 px-6 border border-cyan-700 text-cyan-700 hover:bg-cyan-700 dark:border-cyan-500 dark:text-cyan-500 rounded dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500">
          Get In Touch
        </a>
      </div>
    </>
  );
}
