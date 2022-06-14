import ConfigIcon from "icons/Config";
import OrdrIcon from "icons/Ordr";
import ScanIcon from "icons/Scan";
import SlashIcon from "icons/Slash";
import { FC, PropsWithChildren } from "react";

function Feature({ Icon, name, children }: PropsWithChildren<{ Icon: FC<any>; name: string }>) {
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
		<div className="min-h-screen bg-[#292929] flex justify-center">
			<div className="flex flex-col lg:flex-row mx-10 lg:mx-[20%] my-auto">
				<Feature Icon={SlashIcon} name="Slash Commands">
					Fully utilizes slash commands, so that running commands is fast and easy.
				</Feature>

				<Feature Icon={ConfigIcon} name="Highly Configurable">
					Configure each command to your own liking, making it even easier to run them.
				</Feature>

				<Feature Icon={ScanIcon} name="Advanced Scanner">
					Scans channels for beatmap & profile links and osu! screenshots, and provides information accordingly.
				</Feature>

				<Feature Icon={OrdrIcon} name="Replay Renderer">
					Simply provide a replay file and options, and osscord will render the replay utilizing{" "}
					<a href="https://ordr.issou.best" target="_blank">
						o!rdr
					</a>
					.
				</Feature>
			</div>
		</div>
	);
}
