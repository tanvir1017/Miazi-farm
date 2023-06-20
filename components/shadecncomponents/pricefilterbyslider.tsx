import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils/utils";

type SliderProps = React.ComponentProps<typeof Slider>;

export function PriceFilterBySlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[100%]", className)}
      {...props}
    />
  );
}
