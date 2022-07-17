import { EpisodeItem } from "../../components/episode-item";
import { EpisodePlayer } from "../../components/episode-player";
import episodes from "../../content/episodes.json";

export default function Podcast() {
  const [episode, ...otherEpisodes] = episodes;
  return (
    <div className="text-white mt-4">
      <h1>Dvadesetjedan, balkanska Bitcoin zajednica</h1>
      <p>Svaki tjedan, pričamo o Bitcoinu u dva formata: Bitcoin Razgovori i Bitcoin Filozofija.</p>

      <section className="my-8">
        <p>
          Može nas se slušati na raznim platformama:
          <a href="https://www.youtube.com/channel/UCYXly5XM_SO07vLHh2yPlCw">YouTube</a>,
          <a href="https://open.spotify.com/show/0K4Ak2oNQdCU3Tsr3Tajkx">Spotify</a>,{" "}
          <a href="https://podcasts.apple.com/podcast/dvadeset-jedan-bitcoin-only-podcast-balkan/id1623576900">
            Apple
          </a>
          ,
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85NjJjYTE2NC9wb2RjYXN0L3Jzcw">
            Google
          </a>
          ,
          <a href="https://breez.link/p?feedURL=https%3A%2F%2Fanchor.fm%2Fs%2F962ca164%2Fpodcast%2Frss">
            Breez
          </a>
          , <a href="https://fountain.fm/show/jMb9Z4f0B9BdsMCv2ngs">Fountain</a>,{" "}
          <a href="https://anchor.fm/dvadesetjedan">Anchor</a>.
        </p>
      </section>

      <EpisodePlayer episode={episode} autoPlay={false} />

      <h2>Ostale epizode</h2>

      <div className="grid grid-cols-2 gap-6">
        {otherEpisodes.map(({ image, titlePlain, date, category, slug }) => (
          <EpisodeItem
            key={titlePlain}
            src={image}
            title={titlePlain}
            time={date}
            category={category}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
}
