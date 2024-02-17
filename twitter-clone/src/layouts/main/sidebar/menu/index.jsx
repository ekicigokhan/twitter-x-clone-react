import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import Button from "~/components/button";
import More from "./more";
import New from "./new";
import { useAccount } from "~/store/auth/hooks";

export default function Menu() {
  const account = useAccount();

  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainMenu.map((menu, index) => (
        <NavLink
          key={index}
          to={typeof menu.path === "function" ? menu.path() : menu.path}
          className="py-[0.188rem] block group"
        >
          {({ isActive }) => (
            <div
              className={classNames(
                "pr-2 pt-2 pb-2 pl-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-secondary)]",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[1.641rem] h-[1.641rem] relative">
                {menu.notification && (
                  <span className="w-[1.125rem] h-[1.125rem] rounded-full text-[color:var(--background-primary)] border border-[color:var(--background-primary)] bg-[color:var(--color-primary)] absolute -top-1.5 -right-1.5 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {isActive && menu.icon.active}
                {!isActive && menu.icon.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <New />
    </nav>
  );
}
