import Footer from "@/components/atoms/footer/Footer";
import SectionTitle from "@/components/atoms/typography/SectionTitle";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function ExchangePage() {
  return (
    <>
      <Navbar />
      <SectionTitle
        head="Tukar Fashion"
        body="Tukar fashion yang anda inginkan dengan produk yang anda punya."
      />
      <Footer />
    </>
  );
}
