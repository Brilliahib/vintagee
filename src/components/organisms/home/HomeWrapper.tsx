import BannerHome from "@/components/atoms/banner/BannerHome";
import PageContainer from "@/components/atoms/container/PageContainer";
import HomeWallpaper from "./HomeWallpaper";
import HomeAllProduct from "./HomeAllProduct";

export default function HomeWrapper() {
  return (
    <>
      <HomeWallpaper />
      <PageContainer>
        <div className="space-y-6 md:space-y-12">
          <BannerHome />
          <HomeAllProduct />
        </div>
      </PageContainer>
    </>
  );
}
