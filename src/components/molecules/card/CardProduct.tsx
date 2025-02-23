import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function CardProduct() {
  return (
    <Card className="w-fit border-0 shadow-none">
      <CardHeader className="p-0">
        <Image
          src="/images/product-example.png"
          alt="Product"
          width={1000}
          height={1000}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent className="border-0 p-0 pt-2 md:pt-4">
        <div className="space-y-1">
          <p className="text-sm font-medium md:text-base">
            Jeans jacquard baggy
          </p>
          <h1 className="font-bold">Rp 150.000</h1>
        </div>
      </CardContent>
    </Card>
  );
}
