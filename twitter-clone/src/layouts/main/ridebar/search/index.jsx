import { useRef } from "react";
import { useState } from "react";
import { useClickAway } from "react-use";
export default function Search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });
  return (
    <div
      ref={ref}
      className="min-h-[2rem] h-[3.313rem] mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-10"
    >
      <label className="h-[2.688rem] rounded-full relative bg-[color:var(--background-third)] w-full group border border-transparent focus-within:border-[color:var(--color-primary)] focus-within:bg-[color:var(--background-primary)]">
        <div className="w-[3.5rem] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
          <svg
            viewBox="0 0 24 24"
            className="h-[1.172rem] min-w-[2rem] text-[color:var(--color-base-secondary)] group-focus-within:text-[color:var(--color-primary)]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => {
            setFocus(true);
          }}
          placeholder="Ara"
          value={query}
          type="text"
          className="w-full h-full bg-transparent placeholder-[color:var(--color-base-secondary)] rounded-full outline-none pl-[3.5rem]"
        />
        {query && focus && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
            }}
            className="w-[22px] h-[22px] absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-black bg-[color:var(--color-primary)] flex items-center justify-center min-w-[22px] invisible group-focus-within:visible"
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              />
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="absolute -translate-y-1 top-full w-[350px] bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh-53px)] text-center rounded-lg min-h-[100px]">
          <p className="p-3 pt-5 text-[color:var(--color-base-secondary)] leading-5">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
}
