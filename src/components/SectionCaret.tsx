import CaretIcon from "icons/Caret";

export default function ({ name }: { name: string }) {
	return (
		<div
			className="hidden lg:block absolute left-[48%] text-center mt-[-65px] lowercase cursor-pointer"
			onClick={() => {
				const element = document.getElementsByClassName("simplebar-content-wrapper")[0] as HTMLElement | undefined;
				if (!element) return;

				element.style.scrollBehavior = "smooth";
				element.scrollTop += window.innerHeight;
				element.style.scrollBehavior = "";
			}}
		>
			{name}
			<CaretIcon className="w-8 block mx-auto my-3 animate-bounce" />
		</div>
	);
}
