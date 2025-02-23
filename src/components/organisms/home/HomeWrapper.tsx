import BannerHome from "@/components/atoms/banner/BannerHome";
import PageContainer from "@/components/atoms/container/PageContainer";

export default function HomeWrapper() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <BannerHome />
      </div>
    </PageContainer>
  );
}
