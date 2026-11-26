import SectionPage from "@/components/SectionPage";
import { getSection } from "@/lib/sections";

export default function ReflectPage() {
  return <SectionPage section={getSection("reflect")} />;
}
