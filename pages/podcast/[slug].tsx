import { useRouter } from "next/router";
import { EpisodeItem } from "../../components/episode-item";
import { EpisodePlayer } from "../../components/episode-player";
import episodes from "../../content/episodes.json";
import { Episode } from "../../utils/types";

export default function PodcastSlug() {
  const router = useRouter();
  const [episode] = episodes;
  const slug = router.query.slug;

  return (
    <main>
      <EpisodePlayer episode={episode} />
      {episode.content}
    </main>
  );
}
