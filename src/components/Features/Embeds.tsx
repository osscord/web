import Image from "next/image";
import FeatureSection from "../FeatureSection";

const data: any = [
  { name: "Rank", value: "#1" },
  { name: "PP", value: "22,295" },
  { name: "Accuracy", value: "98.50%" },
  { name: "Play Count", value: "6,110,730" },
  { name: "Play Time", value: "1,697 hours" },
  { name: "Level", value: "103" },
];

const grades: any = [
  {
    icon: "https://osu.ppy.sh/assets/images/GradeSmall-SS-Silver.6681366c.svg",
    value: "25",
  },
  {
    icon: "https://osu.ppy.sh/assets/images/GradeSmall-SS.a21de890.svg",
    value: "23",
  },
  {
    icon: "https://osu.ppy.sh/assets/images/GradeSmall-S-Silver.811ae28c.svg",
    value: "902",
  },
  {
    icon: "https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg",
    value: "142",
  },
  {
    icon: "https://osu.ppy.sh/assets/images/GradeSmall-A.d785e824.svg",
    value: "1052",
  },
];

export default function () {
  return (
    <FeatureSection
      display={
        <div className="relative mx-4">
          <div className="bg-[#343434] border-l-4 border-primary rounded p-4 pl-3 gap-6 flex flex-row text-sm mr-8 mb-8 shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <Image src="/modes/osu.png" width={24} height={24} />
                <div>mrekk</div>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="https://osu.ppy.sh/assets/images/flags/1f1e6-1f1fa.svg"
                  width={24}
                  height={24}
                />
                <span className="text-[#00AFF4]">Australia</span> (#1)
              </div>
              <div className="grid grid-cols-3 gap-4">
                {data.map((i: any) => (
                  <div key={i.name}>
                    <div className="font-bold">{i.name}</div>
                    <div className="bg-[#222222] leading-none pt-[6px] rounded-[3px] text-[11.9px] w-fit pb-1 px-3 text-center">
                      {i.value}
                    </div>
                  </div>
                ))}
                <div className="col-span-3">
                  <div>Grades</div>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {grades.map((grade: any) => (
                      <div
                        key={grade.value}
                        className="flex flex-row gap-2 items-center"
                      >
                        <div className="w-max flex items-center select-none">
                          <Image src={grade.icon} width={34} height={24} />
                        </div>
                        <div className="bg-[#222222] leading-none pt-[6px] rounded-[3px] text-[11.9px] w-fit p-1 text-center">
                          {grade.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-20 h-20">
              <Image
                src="https://a.ppy.sh/7562902?1655056299.jpeg"
                width={80}
                height={80}
                className="rounded"
              />
            </div>
          </div>
        </div>
      }
      heading="carefully designed"
      description={
        "embeds are carefully designed so that they are informative whilst maintaining readability and simplicity."
      }
    />
  );
}
