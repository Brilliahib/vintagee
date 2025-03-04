import Footer from "@/components/atoms/footer/Footer";
import SectionTitle from "@/components/atoms/typography/SectionTitle";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <SectionTitle
        head="Beli Produk"
        body="Beli produk berkualitas yang anda inginkan."
      />
      <Footer />
    </>
  );
}
