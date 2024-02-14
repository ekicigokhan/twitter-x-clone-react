import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import ChangeAccount from "./changeAccount";

export default function Account() {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className={"relative"}>
        <Popover.Button className="my-3 p-3 items-center transition-colors rounded-full hover:bg-[#eff3f41a] w-full flex outline-none text-left">
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold">{account.username}</h6>
            <div className="text-[#71767b]">@{account.fullname}</div>
          </div>
          <svg viewBox="0 0 24 24" width={18.75} className="text-white ml-auto">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="py-3 bottom-[100px] absolute bottom-full w-[300px] overflow-hidden left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
            {({ close }) => <ChangeAccount close={close} />}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
