import { Input } from "@/components/ui/input";

export default function NavSearch() {
  return (
    <>
      <div className="w-full">
        <Input
          placeholder="Search for items"
          className="w-full bg-transparent text-sm shadow-none md:text-base"
        />
      </div>
    </>
  );
}
