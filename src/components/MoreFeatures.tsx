import ConfigIcon from "icons/Config";
import OrdrIcon from "icons/Ordr";
import BoltIcon from "icons/Bolt";
import ScanIcon from "icons/Scan";
import SlashIcon from "icons/Slash";
import GroupIcon from "icons/Group";
import { FC, PropsWithChildren } from "react";
import BadgeCheckIcon from "icons/BadgeCheck";

export function Feature({
  Icon,
  name,
  children,
}: PropsWithChildren<{ Icon: FC<any>; name: string }>) {
  return (
    <div className="lg:w-full flex flex-col items-center m-8 text-center lowercase">
      <Icon className="w-20 m-4" />
      <div className="text-lg font-bold m-4">{name}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
}

export default function () {
  return (
    <div className="bg-[#292929] text-center py-20 lg:py-48">
      <div className="text-3xl mb-8">...and more!</div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row mx-10 my-auto">
          <Feature Icon={BoltIcon} name="Fast">
            Osscord is blazingly fast when it comes to processing scores and
            responding to commands
          </Feature>

          <Feature Icon={BadgeCheckIcon} name="Reliable">
            With a 99.9% uptime, you can use osscord all day, every day
          </Feature>

          <Feature Icon={ConfigIcon} name="Configurable">
            Although working right out of the box, osscord is customizable to
            your needs
          </Feature>

          {/*
          <Feature Icon={ScanIcon} name="Advanced Scanner">
            Gives info on beatmap links, profile links, and osu! screenshots
            sent
          </Feature>
          */}

          <Feature Icon={GroupIcon} name="Active Community">
            Need help or got feedback? join our{" "}
            <a href="https://discord.gg/6Krt8jfEuX" target="_blank">
              support server
            </a>{" "}
            and we'll be happy to help
          </Feature>
        </div>
      </div>
    </div>
  );
}
