import { getPosts } from "@/app/lib/loadPosts";
import { Posts } from "@/types/posts";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

export default async function Blog() {
  const posts: Posts = await getPosts();

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container" key={posts.slug}>
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div
          key={posts.slug}
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
        >
          {posts.map((post) => (
            <div key={post.slug} className="w-full">
              <SingleBlog blog={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
