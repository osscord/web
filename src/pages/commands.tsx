import useSWR from "swr";
import Caret from "icons/Caret";
import { useState } from "react";
import styles from "./index.module.scss";
import Spinner from "components/Spinner";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface Option {
  description: string;
  name: string;
  type: number;
}

interface Command {
  application_id: string;
  default_permission: boolean;
  description: string;
  dm_permission: boolean;
  id: string;
  name: string;
  type: number;
  version: string;
  options: [Option];
}

function exampleValue(value: Option["name"]) {
  let example: string;
  switch (value) {
    case "user":
      example = "masked";
      break;
    case "mode":
      example = "osu!";
      break;
    case "query":
      example = "black rover";
      break;
    case "pp":
      example = "120-180";
      break;
    case "dt":
      example = "true";
      break;
    case "hd":
      example = "false";
      break;
    case "country":
      example = "Australia";
      break;
    case "fails":
      example = "false";
      break;
    case "link":
      example = "https://example.com/replay.osr";
      break;
    default:
      example = "";
      break;
  }
  return example;
}

export default function Commands() {
  const { data, error } = useSWR("https://commands.osscord.xyz/", fetcher);
  const [active, setActive] = useState(-1);

  return (
    <div>
      <div
        className="left-0 top-0 h-52 flex flex-col items-center justify-end pb-6 text-4xl"
        id={styles.background}
      >
        Commands
      </div>
      <div className="flex flex-col gap-5 mt-52 p-5 md:py-10 md:px-32">
        {data ? (
          data
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
                  <div className="flex items-center ml-3">
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
                            <span className="text-[#ff66ab]">
                              {option.name}:
                            </span>{" "}
                            {option.description}
                          </div>
                        )) ?? ""}
                      </div>
                      {command.options ? (
                        <h2 className="text-md mt-4 mb-1">Example:</h2>
                      ) : (
                        ""
                      )}
                      {command.options ? (
                        <div className="flex flex-row text-sm gap-2 flex-wrap">
                          /{command.name}
                          {command.options.map((option) => {
                            const value = exampleValue(option.name);
                            return value ? (
                              <div className="text-white/80">
                                {option.name}: {value}
                              </div>
                            ) : (
                              ""
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))
        ) : (
          <div className="flex items-center justify-center">
            {error ? (
              <div>Failed to load commands.</div>
            ) : (
              <Spinner size={20} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
