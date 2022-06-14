import CaretIcon from "icons/Caret";

export default function ({ name }: { name: string }) {
	return (
		<div
			className="hidden lg:block absolute left-[48%] text-center mt-[-65px] lowercase cursor-pointer"
			onClick={() => {
				document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
				window.scroll({ top: window.scrollY + window.innerHeight });
				document.getElementsByTagName("html")[0].style.scrollBehavior = "";
			}}
		>
			{name}
			<CaretIcon className="w-8 block mx-auto my-3 animate-bounce" />
		</div>
	);
}
