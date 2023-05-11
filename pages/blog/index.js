import Link from "next/link";
import Navbar from "../../components/navbar";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.map((post) => (
        <div key={post.id} className="ssr-styles">
          <h3>{post.id}</h3>
          <Link href={`/blog/${post.id}`}>
            <h2>
              <span className=" font-medium text-lg">Title :</span> {post.title}
            </h2>
          </Link>
          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </>
  );
};

export default blog;
