import H5AudioPlayer from "react-h5-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import Image from "next/Image";
import { Episode } from "../utils/types";

type Props = H5AudioPlayer["props"] & {
  episode: Episode;
};

export function EpisodePlayer({ episode, ...otherProps }: Props) {
  return (
    <div className="flex bg-player rounded drop-shadow">
      {/* <Image */}
      {/*   src={episode.image} */}
      {/*   height={160} */}
      {/*   width={200} */}
      {/*   alt="" */}
      {/*   layout="fixed" */}
      {/*   className="rounded-l" */}
      {/* /> */}
      <div className="w-full flex flex-col justify-between">
        <h1 className="p-4 pb-0 text-sm text-left self-center">{episode.title}</h1>
        <div>
          <AudioPlayer autoPlay {...otherProps} className="rounded-br" />
        </div>
      </div>
    </div>
  );
}
