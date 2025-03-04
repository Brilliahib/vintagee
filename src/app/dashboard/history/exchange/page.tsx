import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryExchangeWrapper from "@/components/organisms/dashboard/history/exchange/DashboardHistoryExchange";

export default function DashboardExchangeHistory() {
  return (
    <>
      <DashboardTitle
        head="Riwayat Tukar Fashion"
        body="Menampilkan semua data riwayat tukar fashion."
      />
      <DashboardHistoryExchangeWrapper />
    </>
  );
}
