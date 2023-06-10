import { Button } from "@/components/ui/button";

export function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return <Button className="bg-gray-900 text-white">{children}</Button>;
}

export function ButtonOutline({ children }: { children: React.ReactNode }) {
  return <Button variant="outline">{children}</Button>;
}
export function ButtonModified({ children }: { children: React.ReactNode }) {
  return <Button className="">{children}</Button>;
}
export function ButtonAlternative({ children }: { children: React.ReactNode }) {
  return (
    <Button className="bg-primaryalternative hover:bg-primaryalternative">
      {children}
    </Button>
  );
}
