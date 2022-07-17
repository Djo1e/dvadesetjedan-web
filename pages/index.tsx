import fs from "fs";
import matter from "gray-matter";

export default function Index({ posts }) {
  return (
    <>
      <main className="mt-10 text-left text-white">
        <h1 className="text-4xl mt-4 tracking-wider">Dvadesetjedan, balkanska Bitcoin zajednica</h1>
        <h2 className="text-2xl mt-6 tracking-wider">
          Sadržaji za Bitcoinere i one koji to tek postaju. Maksimalistički i toksični.{" "}
          <a href="https://bitcoin.org/files/bitcoin-paper/bitcoin_sr.pdf" className="text-orange">
            Bitcoin
          </a>
          , i ništa drugo.
        </h2>
        <p className="text-2xl tracking-wider"></p>
        <p className="text-2xl mt-6 tracking-wider">
          Scena na Balkanu, kao i svuda u svetu, prezasićena je lošim informacijama i motivima.
          Previše je priče o tome kako lako do zarade, i kako se obogatiti preko “kripta.”
        </p>
        <p className="text-2xl mt-6 tracking-wider">
          Bitcoin je jedina prava decentralizovana valuta. Dvadesetjedan je lokalni fork{" "}
          <a href="https://twentyone.world/">većeg projekta</a>, koji cilja svojim delovanjem
          uticati na promenu svesti i ostvariti fokus na prave vrednosti i moć koju nam tehnologija
          poput Bitcoina donosi.
        </p>

        <p className="text-2xl mt-6 tracking-wider">
          Ideja ove stranice je da bude resurs za edukativne materijale, zanimljive novosti iz sveta
          Bitcoina, kao i lokalni centar za rast Bitcoin zajednice.
        </p>
      </main>

      {/* <div className="flex flex-col w-96 m-auto"> */}
      {/*   {posts?.map((post) => { */}
      {/*     //extract slug and frontmatter */}
      {/*     const { slug, frontmatter } = post; */}
      {/*     //extract frontmatter properties */}
      {/*     const { title, author, category, date, bannerImage, tags } = frontmatter; */}

      {/*     return ( */}
      {/*       <article key={title} className="text-white border border-white m-5 p-5"> */}
      {/*         <h1>{title}</h1> */}
      {/*         <h3>{author}</h3> */}
      {/*         <h3>{date}</h3> */}
      {/*       </article> */}
      {/*     ); */}
      {/*   })} */}
      {/* </div> */}
    </>
  );
}
//
export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
