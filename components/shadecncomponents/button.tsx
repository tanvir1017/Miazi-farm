import { Button } from "@/components/ui/button";

export function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return <Button className="bg-gray-900 text-white">{children}</Button>;
}
