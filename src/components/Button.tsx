import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function ({
  className,
  href,
  children,
}: PropsWithChildren<{ className?: string; href: string }>) {
  return (
    <a
      className={twMerge(
        `inline-block bg-primary hover:bg-[#d1588f] text-white hover:text-white text-xl font-bold m-2.5 p-5 lowercase rounded-3xl select-none`,
        className
      )}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
