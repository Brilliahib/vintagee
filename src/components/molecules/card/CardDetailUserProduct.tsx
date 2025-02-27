import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/types/user/user";
import { generateFallbackFromName } from "@/utils/generate-name";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface CardDetailUserProductProps {
  data?: User;
}

export default function CardDetailUserProduct({
  data,
}: CardDetailUserProductProps) {
  return (
    <Card className="mb-12 rounded-none border-0 border-b pb-6 shadow-none md:pb-12">
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12 border border-muted md:h-36 md:w-36">
              <AvatarImage src={data?.name} />
              <AvatarFallback className="h-12 w-12 text-3xl font-semibold text-gray-700 md:h-36 md:w-36">
                {generateFallbackFromName(data?.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">{data?.name}</h1>
            <p className="text-muted-foreground">
              Bergabung sejak {""}
              {format(data?.created_at ?? "", "MMMM yyyy", {
                locale: id,
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
