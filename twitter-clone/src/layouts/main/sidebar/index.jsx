import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[265px] min-h-screen">
      <Logo />
      <Menu />
    </aside>
  );
}
