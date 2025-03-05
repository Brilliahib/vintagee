import BannerHome from "@/components/atoms/banner/BannerHome";
import PageContainer from "@/components/atoms/container/PageContainer";
import HomeWallpaper from "./HomeWallpaper";
import HomeAllProduct from "./HomeAllProduct";
import HomeCategoryProduct from "./HomeCategoryProduct";

export default function HomeWrapper() {
  return (
    <>
      <HomeWallpaper />
      <PageContainer>
        <div className="space-y-10 md:space-y-16">
          <BannerHome />
          <HomeAllProduct />
          <HomeCategoryProduct />
        </div>
      </PageContainer>
    </>
  );
}
