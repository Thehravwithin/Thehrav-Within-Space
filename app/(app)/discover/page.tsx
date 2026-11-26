import SectionPage from "@/components/SectionPage";
import { getSection } from "@/lib/sections";

export default function DiscoverPage() {
  return <SectionPage section={getSection("discover")} />;
}
