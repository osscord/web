import { useEffect, useState } from "react";
import Statistics from "types/Statistics";

function Statistic({ name, value }: { name: string; value: string }) {
	return (
		<div className="text-center font-bold m-8">
			<div className="text-xl lowercase">{name}</div>
			<div className="text-5xl">{value}</div>
		</div>
	);
}

export default function () {
	const [{ servers, users, commands }, setStatistics] = useState({
		servers: 0,
		users: 0,
		commands: 0
	} as Statistics);

	useEffect(
		() =>
			void fetch("https://metrics.osscord.xyz")
				.then(_res => _res.json())
				.then(setStatistics)
				.catch(() => null),
		[]
	);

	return (
		<div className="min-h-[40vh] bg-[#ff66ab] flex flex-col lg:flex-row items-center justify-center">
			<Statistic name="Servers" value={servers.toLocaleString()} />
			<Statistic name="Users" value={users.toLocaleString()} />
			<Statistic name="Commands" value={commands.toLocaleString()} />
		</div>
	);
}
