import { Button } from "@/components/shadcn/ui/button";
import { Loader } from "lucide-react";

export function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return <Button className="bg-gray-900 text-white">{children}</Button>;
}

export function ButtonOutline({ children }: { children: React.ReactNode }) {
  return <Button variant="outline">{children}</Button>;
}
export function ButtonModified({ children }: { children: React.ReactNode }) {
  return <Button>{children}</Button>;
}
export function ButtonAlternative({ children }: { children: React.ReactNode }) {
  return (
    <Button className="bg-primaryalternative hover:bg-primaryalternative">
      {children}
    </Button>
  );
}
export function LoginButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      className="w-full rounded-full bg-white hover:bg-white"
      variant={"outline"}
    >
      {children}
    </Button>
  );
}
export function SubmitButton({
  children,
  loading,
  loadingText,
}: {
  children: React.ReactNode;
  loading: boolean;
  loadingText: string;
}) {
  return (
    <Button
      type="submit"
      className="w-full rounded-full border relative overflow-hidden"
      disabled={loading}
    >
      {loading && (
        <span className="absolute left-[9.25rem] transition-transform">
          <Loader strokeWidth={0.5} className="animate-spin transition-all" />
        </span>
      )}
      {!loading ? children : loadingText}
    </Button>
  );
}

export function BlurredButton({ children }: { children: React.ReactNode }) {
  return (
    <Button className="bg-white/30 backdrop-blur-md text-white hover:bg-white/30 border ">
      {children}
    </Button>
  );
}
