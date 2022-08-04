export default function FeatureSection({
  display,
  heading,
  description,
  flip = false,
}: any) {
  return (
    <div className="bg-[#292929] flex flex-col pt-32 lg:flex-row lg:pt-36 items-center justify-center">
      <div className={flip ? "lg:order-last" : "lg:order-first"}>{display}</div>
      <div
        className={`flex flex-col text-center lg:text-left lowercase gap-4 max-w-[460px] mt-12 mx-4 lg:m-0 ${
          flip ? "lg:mr-20" : "lg:ml-20"
        }`}
      >
        <div className="text-4xl font-bold">{heading}</div>
        <div className="text-md">{description}</div>
      </div>
    </div>
  );
}
