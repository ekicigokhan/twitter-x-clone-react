import { topics } from "~/utils/consts";
import Topic from "./topic";
import { Link } from "react-router-dom";
import SidebarSection from "~/components/sidebar-section";

export default function Topics() {
  return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
