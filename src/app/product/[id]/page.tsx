import ProductDetailWrapper from "@/components/organisms/product/ProductWrapperContent";

interface ProductDetailPageParams {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageParams) {
  const { id } = await params;
  return <ProductDetailWrapper id={id} />;
}
