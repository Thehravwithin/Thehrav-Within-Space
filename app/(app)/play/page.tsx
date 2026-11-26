import SectionPage from "@/components/SectionPage";
import { getSection } from "@/lib/sections";

export default function PlayPage() {
  return <SectionPage section={getSection("play")} />;
}
