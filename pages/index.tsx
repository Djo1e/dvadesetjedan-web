import fs from "fs";
import matter from "gray-matter";

export default function Index({ posts }) {
  return (
    <div className="bg-stone h-full p-5">
      <h1 className="text-6xl uppercase text-orange font-bold text-center">Dvadesetjedan</h1>
      <div className="flex flex-col w-96 m-auto">
        {posts?.map((post) => {
          //extract slug and frontmatter
          const { slug, frontmatter } = post;
          //extract frontmatter properties
          const { title, author, category, date, bannerImage, tags } = frontmatter;

          return (
            <article key={title} className="text-white border border-white m-5 p-5">
              <h1>{title}</h1>
              <h3>{author}</h3>
              <h3>{date}</h3>
            </article>
          );
        })}
      </div>
    </div>
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
