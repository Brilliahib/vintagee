import UserProductWrapper from "@/components/organisms/user/UserProductWrapper";

interface DetailUserProductPageParams {
  params: Promise<{ id: string }>;
}

export default async function DetailUserProductPage({
  params,
}: DetailUserProductPageParams) {
  const { id } = await params;
  return <UserProductWrapper id={id} />;
}
