import { GetServerSideProps } from "next";
import Date from "../../components/date";
import { getBlogDataById } from "../../lib/blog";

const BlogDetail = ({ blogData }: any) => {
  console.log("blogData", blogData);
  const { id, title, date, contentHtml } = blogData;
  return (
    <div className="max-w-screen-md mx-auto my-8">
      <h2>{id}</h2>
      <h1 className="text-5xl">{title}</h1>
      {/* <div className="text-sm">{date}</div> */}
      <Date dateString={'2020-01-01'} />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
  );
};

export default BlogDetail;

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const blogData = await getBlogDataById(params?.id);
  return {
    props: {
      blogData,
    },
  };
};
