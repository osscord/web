import SlashIcon from "icons/Slash";
import FeatureSection from "../FeatureSection";
import Osscord from "icons/Osscord";
import { useState } from "react";

export default function () {
  const [mode, setMode] = useState("");

  return (
    <FeatureSection
      flip={true}
      display={
        <div className="relative mx-4">
          <div className="flex flex-col gap-2 mr-6">
            <div className="bg-[#303030] shadow-lg w-full rounded-lg flex flex-col p-2 mt-4 select-none">
              {["osu", "mania", "taiko", "catch"].map((i: any) => (
                <div
                  key={i}
                  onClick={() => setMode(i)}
                  className="p-2 hover:bg-white/10 hover:cursor-pointer rounded"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="bg-[#404040] shadow-lg flex flex-row rounded-lg text-center items-center pr-4">
              <div className="px-4 py-2.5">
                <Osscord className="w-6" />
              </div>
              <div className="flex flex-row gap-x-3 gap-y-2 items-center flex-wrap pr-2.5 py-3 lg:py-0">
                <div className="lg:py-[11px]">/recent</div>
                <div className="flex flex-row">
                  <div className="bg-[#18191c] rounded-l px-2 py-[1px]">
                    user
                  </div>
                  <div className="bg-[#292b2f] rounded-r px-2 py-[1px]">
                    mrekk
                  </div>
                </div>
                <div className="flex flex-row rounded border border-primary">
                  <div className="bg-[#18191c] rounded-l px-2 py-[1px]">
                    mode
                  </div>
                  <div className="bg-[#292b2f] rounded-r px-2 py-[1px]">
                    {mode}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SlashIcon className="w-24 right-0 top-0 absolute" />
        </div>
      }
      heading={"Slash Commands"}
      description={
        "osscord utilizes discord's slash commands, so that running commands is fast and easy. no need to go through large help menus and learn complicated syntax."
      }
    />
  );
}
