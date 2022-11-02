import Osscord from "icons/Osscord";

const links = [{ name: "Commands", url: "/commands" }];

export default function NavBar() {
  return (
    <div className="w-full p-6 md:px-10 absolute flex flex-row items-center [&>a]:text-white top-0 left-0">
      <a
        href="/"
        className="text-2xl font-bold flex flex-row gap-2 items-center select-none cursor-pointer flex-1"
      >
        <Osscord className="w-10" />
        osscord
      </a>
      <div className="[&>a]:text-white flex gap-6">
        {links.map((link: any) => (
          <a href={link.url} className="hover:underline">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
