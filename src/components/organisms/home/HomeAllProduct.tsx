import CardProduct from "@/components/molecules/card/CardProduct";

export default function HomeAllProduct() {
  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <h1 className="text-base font-bold md:text-xl">Produk Terbaru</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
}
