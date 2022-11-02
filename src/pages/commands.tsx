import useSWR from "swr";
import Caret from "icons/Caret";
import { useState } from "react";
import styles from "./index.module.scss";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface Command {
  application_id: string;
  default_permission: boolean;
  description: string;
  dm_permission: boolean;
  id: string;
  name: string;
  type: number;
  version: string;
  options: [{ description: string; name: string; type: number }];
}

export default function Commands() {
  const { data, error } = useSWR("https://commands.osscord.xyz/", fetcher);
  const [active, setActive] = useState(-1);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data.sort((a: any, b: any) => a.name.localeCompare(b.name)));

  return (
    <div>
      <div className="left-0 top-0 h-1/4" id={styles.background} />
      <div className="flex flex-col gap-5 p-4 pt-14 md:p-24 mt-10">
        <h1 className="text-4xl text-center mb-14 md:mb-20">Commands</h1>
        {data
          .sort((a: Command, b: Command) => a.name.localeCompare(b.name))
          .map((command: Command, index: number) => (
            <div key={command.id} className="shadow-lg">
              <div
                className={`py-3 px-4 bg-[#404040] flex flex-row justify-between cursor-pointer ${
                  active == index ? "rounded-t-md" : "rounded-md "
                }`}
                onClick={() => setActive(active == index ? -1 : index)}
              >
                <div className="flex flex-row gap-3 flex-wrap">
                  <div>/{command.name}</div>
                  {command?.options?.map((option) => (
                    <div className="bg-[#18191c] rounded px-2 py-[1px]">
                      {option.name}
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <Caret
                    className={`w-4 ${active == index ? "rotate-180" : ""}`}
                  />
                </div>
              </div>
              {active == index ? (
                <div className="bg-[#404040] p-4 md:p-6 pt-0 md:pt-0 rounded-b-md flex flex-col">
                  <div className="rounded-md bg-[#222222] p-4">
                    <h1 className="text-lg">{command.description}</h1>
                    {command.options ? (
                      <h2 className="text-md mt-4 mb-1">Options:</h2>
                    ) : (
                      ""
                    )}

                    <div className="flex flex-col text-sm">
                      {command?.options?.map((option) => (
                        <div className="text-white/80">
                          <span className="text-[#ff66ab]">{option.name}:</span>{" "}
                          {option.description}
                        </div>
                      )) ?? ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
