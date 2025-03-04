import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistorySalesWrapper from "@/components/organisms/dashboard/history/sales/DashboardHistorySalesWrapper";

export default function DashboardHistorySalesPage() {
  return (
    <>
      <DashboardTitle
        head="Riwayat Penjualan"
        body="Menampilkan semua data riwayat pembelian."
      />
      <DashboardHistorySalesWrapper />
    </>
  );
}
