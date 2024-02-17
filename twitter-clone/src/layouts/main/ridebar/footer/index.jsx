// Hizmet Şartları
// Gizlilik Politikası
// Çerez Politikası
// Imprint
// Erişilebilirlik
// Reklam bilgisi
// Daha fazla
// © 2024 X Corp.

import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[13px]">
      <Link
        className="hover:underline text-[color:var(--color-base-secondary)] leading-4"
        to={"/"}
      >
        Hizmet Şartları
      </Link>
      <Link
        className="hover:underline text-[color:var(--color-base-secondary)] leading-4"
        to={"/"}
      >
        Gizlilik Politikası
      </Link>
      <Link
        className="hover:underline text-[color:var(--color-base-)] leading-4"
        to={"/"}
      >
        Çerez Politikası
      </Link>
      <Link
        className="hover:underline text-[color:var(--color-base-secondary)] leading-4"
        to={"/"}
      >
        Imprint
      </Link>
      <Link
        className="hover:underline text-[color:var(--color-base-secondary)] leading-4"
        to={"/"}
      >
        Erişilebilirlik
      </Link>
      <Link
        className="hover:underline text-[color:var(--color-base-secondary)] leading-4"
        to={"/"}
      >
        Reklam bilgisi
      </Link>
      <div className="w-full flex gap-2">
        <Popover className="relative inline-flex leading-4">
          <Popover.Button className="hover:underline text-[color:var(--color-base-secondary)] leading-4 inline-flex items-center">
            Daha fazla
            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="w-[150px] transition-colors overflow-hidden absolute bottom-0 right-0 max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-xl grid">
            <Link
              to={"/"}
              className="py-3 px-4 text-[13px] leading-5 font-bold hover:bg-[color:var(--background-secondary)]"
            >
              Hakkında
            </Link>
            <Link
              to={"/"}
              className="py-3 px-4 text-[13px] leading-5 font-bold hover:bg-[color:var(--background-secondary)]"
            >
              X uygulamasını indir
            </Link>
            <Link
              to={"/"}
              className="py-3 px-4 text-[13px] leading-5 font-bold hover:bg-[color:var(--background-secondary)]"
            >
              Durum
            </Link>
            <Link
              to={"/"}
              className="py-3 px-4 text-[13px] leading-5 font-bold hover:bg-[color:var(--background-secondary)]"
            >
              İşletmeciler için X
            </Link>
            <Link
              to={"/"}
              className="py-3 px-4 text-[13px] leading-5 font-bold hover:bg-[color:var(--background-secondary)]"
            >
              Geliştiriciler
            </Link>
          </Popover.Panel>
        </Popover>
        <p className="text-[13] text-[color:var(--color-base-secondary)] leading-4">
          &copy; 2023 GÖKHAN EKİCİ
        </p>
      </div>
    </footer>
  );
}
