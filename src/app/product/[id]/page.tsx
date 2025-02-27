import ProductDetailWrapper from "@/components/organisms/product/ProductWrapperContent";

interface ProductDetailPageParams {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageParams) {
  return <ProductDetailWrapper id={params.id} />;
}
