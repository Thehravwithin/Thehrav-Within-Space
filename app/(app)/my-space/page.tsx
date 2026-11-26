import SectionPage from "@/components/SectionPage";
import { getSection } from "@/lib/sections";

export default function MySpacePage() {
  return <SectionPage section={getSection("my-space")} />;
}
