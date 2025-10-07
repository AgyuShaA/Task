import { PostsListContainer } from "@/widgets/post/elements";

export const revalidate = 30;

export default function Home() {
  return (
    <div className="font-sans  items-center justify-items-center p-8 pb-20 gap-16 ">
      <PostsListContainer />
    </div>
  );
}
