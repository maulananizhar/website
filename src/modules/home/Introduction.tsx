export default function Introduction() {
  return (
    <>
      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Hi, my name is
        </p>
        <p className="font-sans text-6xl font-bold mb-6">Nizhar Maulana</p>
        <p className="font-sans text-6xl font-bold mb-14 opacity-80 dark:opacity-70">
          I build things on web
        </p>
        <p className="font-sans max-w-[500px] mb-14">
          I&apos;m a future software engineer based in Depok, West Java,
          Indonesia. Specializing in building and occasionally designing
          exceptional websites, applications, and everything in between.
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
