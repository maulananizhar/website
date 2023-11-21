export default function Skillset({
  logo,
  text,
}: {
  logo: string;
  text: string;
}) {
  return (
    <>
      <div className="flex w-1/3 md:w-1/4 lg:w-1/6 text-center my-3">
        <div className="mx-auto flex flex-col group cursor-pointer">
          <b
            className={`text-3xl nf ${logo} group-hover:-translate-y-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500`}></b>
          <p className="mt-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
