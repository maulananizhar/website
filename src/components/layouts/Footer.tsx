import Link from "next/link";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";

export default function Footer() {
  const fetcher = (args: string) =>
    fetch(args, { method: "POST" }).then(res => res.json());

  function useCurrentPlaying() {
    const { data, error, isLoading } = useSWR(
      `/api/spotify/current-playing`,
      fetcher
    );
    return {
      track: data,
      trackLoading: isLoading,
      isError: error,
    };
  }

  const { track, trackLoading, isError } = useCurrentPlaying();

  return (
    <>
      <div className="container flex flex-wrap items-center text-center px-4 md:px-24 pb-6">
        <div className="w-1/2 sm:w-1/4 order-1 divide-x-2 flex justify-center sm:justify-start">
          <div className="inline-flex flex-col justify-start md:justify-center font-mono text-xs max-w-[150px] md:max-w-[180px] lg:max-w-[192px]">
            <Link
              className="inline-block text-left hover:text-cyan-700 dark:hover:text-cyan-500 duration-500"
              href="https://github.com/maulananizhar/website"
              target="_blank">
              /source
            </Link>
            <Link
              className="inline-block text-left hover:text-cyan-700 dark:hover:text-cyan-500 duration-500"
              href="#">
              /back
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-2/4 order-3 sm:order-2 mt-4 sm:mt-0">
          <Link
            href="https://github.com/maulananizhar"
            target="_blank"
            className="font-mono text-xs font-thin hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            Created with ♡ by Nizhar Maulana
          </Link>
          <p className="font-mono text-xs font-thin opacity-80">
            Last Updated on: 22-Nov-2023
          </p>
        </div>
        <div className="flex justify-center sm:justify-end w-1/2 sm:w-1/4 order-2 sm:order-3">
          <div className="flex justify-end md:justify-center max-w-[150px] md:max-w-[180px] lg:max-w-[192px] items-center text-lana-dark dark:text-lana-light">
            <div className="w-6 h-6 mr-4">
              <SiSpotify className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-left truncate">
              {trackLoading === true ? (
                <>
                  <Link
                    href="https://open.spotify.com"
                    target="_blank"
                    className="truncate">
                    Not playing
                  </Link>
                  <p className="truncate opacity-80">Spotify</p>
                </>
              ) : (
                <>
                  <Link
                    href={track.trackUrl}
                    target="_blank"
                    className="truncate hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
                    {track.title}
                  </Link>
                  <p className="truncate opacity-80">{track.artist}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
