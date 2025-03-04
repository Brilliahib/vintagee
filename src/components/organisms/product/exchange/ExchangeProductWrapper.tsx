import PageContainer from "@/components/atoms/container/PageContainer";
import ExchangeCreateContent from "./ExchangeCreateContent";
import ExchangeDetailProductContent from "./ExchangeDetailProductContent";

interface ExchangeProductWrapperProps {
  id: string;
}

export default function ExchangeProductWrapper({
  id,
}: ExchangeProductWrapperProps) {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <div className="md:col-span-2">
          <ExchangeCreateContent id={id} />
        </div>

        <ExchangeDetailProductContent id={id} />
      </div>
    </PageContainer>
  );
}
