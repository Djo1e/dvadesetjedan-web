// import Image from "next/Image";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";

export interface EpisodeItemProps {
  src: string;
  category: string;
  time: string;
  title: string;
  slug: string;
}

export function EpisodeItem({ src, category, time, title, slug }: EpisodeItemProps) {
  const router = useRouter();
  return (
    <button
      className="flex bg-[#1B1B1B] p-9 rounded-xl max-h-72"
      onClick={() => router.push(`${routes.podcast}/${slug}`)}
    >
      <div className="min-w-26">
        {/* <Image src={src} height={100} width={100} alt="" layout="fixed" /> */}
      </div>
      <div className="flex flex-col overflow-hidden">
        <p className="text-right">{time}</p>
        <p className="text-right mt-4 ml-4 truncate">{title}</p>
      </div>
    </button>
  );
}
