import { topics } from "~/utils/consts";
import Topic from "./topic";

export default function Topics() {
  return (
    <div className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
      <h5 className="py-3 px-5 flex items-center text-xl font-extrabold leading-6 text-[#e7e9ea]">
        İlgini Çekebilecek Gündemler
      </h5>
      <div className="grid ">
        {topics.map((topic, index) => (
          <Topic item={topic} key={index} />
        ))}
      </div>
    </div>
  );
}
