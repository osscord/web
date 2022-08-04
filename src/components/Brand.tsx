import OsscordIcon from "icons/Osscord";
import Button from "./Button";

export default function () {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col lg:flex-row items-center lg:mx-[20%] lg:my-auto">
        <OsscordIcon width="40%" />

        <div>
          <div className="text-6xl font-bold">osscord</div>
          <div className="text-xl m-8 lowercase">
            An easy-to-use, feature-rich{" "}
            <a href="https://osu.ppy.sh" target="_blank">
              osu!
            </a>{" "}
            bot for Discord
          </div>
          <Button href="https://discord.com/oauth2/authorize?client_id=868697725464633414&scope=bot+applications.commands">
            Add to server
          </Button>
          <Button
            className="bg-[#111] hover:bg-black"
            href="https://discord.gg/6Krt8jfEuX"
          >
            Support Server
          </Button>
        </div>
      </div>
    </div>
  );
}
