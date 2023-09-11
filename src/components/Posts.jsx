import { POSTS } from "../constants";
import { MyPost } from "./MyPost"

const Posts = () => {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-[1380px] m-auto p-10 ">
                <h3 className="text-[#121a26] font-medium text-[24px] px-6 pb-8">Recent blog posts</h3>
                <div className="block lg:grid grid-rows-2 gri grid-flow-col gap-4">
                    {POSTS.map(post => (
                        <MyPost post={post} key={post.id} />

                    ))}
                </div>

            </div>
        </section>
    );
}
export default Posts
