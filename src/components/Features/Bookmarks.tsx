import FeatureSection from "../FeatureSection";

export default function () {
  return (
    <FeatureSection
      flip={true}
      display={
        <div className="relative mx-4">
          <div className="bg-gradient-to-r from-[#292929] z-10 absolute w-full h-full" />
        </div>
      }
      heading="Bookmarks"
      description="bookmark beatmaps for later yknow"
    />
  );
}
