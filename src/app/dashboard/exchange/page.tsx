import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardExchangeWrapper from "@/components/organisms/dashboard/exchange/DashboardExchangeWrapper";

export default function ExchangeDashboardPage() {
  return (
    <>
      <DashboardTitle
        head="Tukar Fashion"
        body="Menampilkan daftar permintaan tukar fashion."
      />
      <DashboardExchangeWrapper />
    </>
  );
}
