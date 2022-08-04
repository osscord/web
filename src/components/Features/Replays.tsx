import Image from "next/image";
import FeatureSection from "../FeatureSection";
import OrdrIcon from "icons/Ordr";
import { useState } from "react";

export default function () {
  const [video, setVideo] = useState(false);

  return (
    <FeatureSection
      display={
        <div className="relative mx-4 pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-end">
              <div className="w-[33px] h-3 border-l-2 border-l-[#404040] b border-t-2 border-t-[#404040] rounded-tl-md" />
              <div className="flex flex-row gap-1 items-center text-sm opacity-75">
                <Image
                  src={"https://cdn.discordapp.com/embed/avatars/5.png"}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <strong>masked</strong> used{" "}
                <a className="cursor-pointer">/replay</a>
              </div>
            </div>
            <div className="bg-[#343434] border-l-4 border-primary rounded p-4 pl-3 gap-6 flex flex-row text-sm shadow-lg mr-4">
              <div className="flex flex-col gap-4">
                <div className="font-bold text-base">a really cool replay</div>
                {!video ? (
                  <div className="bg-[#222222] max-w-[400px] max-h-[225px] rounded relative select-none">
                    <div
                      onClick={() => setVideo(true)}
                      className="absolute rounded-full bg-black/50 w-16 h-16 left-[168px] top-[80.5px] flex items-center justify-center hover:cursor-pointer z-10"
                    >
                      <svg
                        aria-hidden="false"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <polygon
                          fill="currentColor"
                          points="0 0 0 14 11 7"
                          transform="translate(7 5)"
                        ></polygon>
                      </svg>
                    </div>
                    <Image src="/circles.svg" width={400} height={225} />
                  </div>
                ) : (
                  <div className="max-w-[400px] max-h-[225px]">
                    <video
                      controls
                      autoPlay
                      src="/monkey.mp4"
                      className="rounded"
                    />
                  </div>
                )}
              </div>
            </div>
            <OrdrIcon className="w-24 right-0 bottom-0 absolute" />
          </div>
        </div>
      }
      heading="Replay Renderer"
      description={
        <div>
          share your favourite replays with ease, powered by{" "}
          <a href="https://ordr.issou.best/" target="_blank">
            o!rdr
          </a>
          . Simply upload a replay file and get back a customized video replay.
        </div>
      }
    />
  );
}
