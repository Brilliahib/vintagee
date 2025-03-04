import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardPurchaseWrapper from "@/components/organisms/dashboard/purchase/DashboardPurchaseWrapper";

export default function DashboardPurchasePage() {
  return (
    <>
      <DashboardTitle
        head="Pembelian"
        body="Menampilkan daftar pembelian anda."
      />
      <DashboardPurchaseWrapper />
    </>
  );
}
