import { Input } from "@/components/ui/input";

export default function NavSearch() {
  return (
    <>
      <div className="w-full">
        <Input
          placeholder="Search for items"
          className="shadow-0 w-full bg-transparent"
        />
      </div>
    </>
  );
}
