import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@/types/product/product";
import Image from "next/image";

interface ProductProps {
  product?: Product;
  isLoading?: boolean;
}

export default function CardProduct({ product, isLoading }: ProductProps) {
  return (
    <Card className="w-fit border-0 shadow-none">
      <CardHeader className="p-0">
        {isLoading ? (
          <Skeleton className="h-[200px] w-[200px] rounded-md md:h-[250px] md:w-[250px]" />
        ) : (
          <Image
            src={product!.image_url}
            alt={product!.name}
            width={250}
            height={250}
            className="rounded-md object-cover"
          />
        )}
      </CardHeader>
      <CardContent className="border-0 p-0 pt-2 md:pt-4">
        <div className="space-y-1">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-24" />
            </>
          ) : (
            <>
              <p className="text-sm font-medium md:text-base">
                {product!.name}
              </p>
              <span className="text-sm text-muted-foreground">
                Size {product!.size}
              </span>
              <h1 className="font-bold">
                Rp {product!.price.toLocaleString()}
              </h1>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
