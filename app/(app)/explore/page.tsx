import SectionPage from "@/components/SectionPage";
import { getSection } from "@/lib/sections";

export default function ExplorePage() {
  return <SectionPage section={getSection("explore")} />;
}
