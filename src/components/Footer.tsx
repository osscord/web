import Link from "next/link";

const links = [
  { label: "terms", link: "/terms" },
  { label: "privacy", link: "/privacy" },
  { label: "status", link: "/status" },
];

export default function () {
  return (
    <div className="bg-[#292929] flex flex-col pt-2.5 pb-[5px] text-[10px] text-center">
      <div className="font-bold mb-[5px]">
        {links.map((i: any) => (
          <Link key={i.label} href={i.link}>
            <a className="mx-2.5 cursor-pointer text-white">{i.label}</a>
          </Link>
        ))}
      </div>
      <div className="text-center mb-[5px] text-gray-300">
        copyright &copy; 2022 osscord. not affiliated with ppy
      </div>
    </div>
  );
}
