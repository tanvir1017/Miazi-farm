import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SortBySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Default Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Default Sorting</SelectLabel>
          <SelectItem value="blueberry">Price low to high</SelectItem>
          <SelectItem value="apple">Sort by popularity</SelectItem>
          <SelectItem value="banana">Sort by avarage rating</SelectItem>
          <SelectItem value="grapes">Sort by latest</SelectItem>
          <SelectItem value="pineapple">Price high to low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
