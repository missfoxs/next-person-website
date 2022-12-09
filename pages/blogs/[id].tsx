import { GetServerSideProps } from "next";
import Date from "../../components/date";
import { getBlogDataById } from "../../lib/blog";
import _pick from "lodash-es/pick";
import { useTranslations } from "next-intl";

const BlogDetail = ({ blogData }: any) => {
  const { id, title, date, contentHtml } = blogData;
  const t = useTranslations("Blog");
  return (
    <div className="max-w-screen-md mx-auto my-8">
      <h2>{t("blog")}</h2>
      <h1 className="text-5xl pb-10">{title}</h1>
      <Date dateString={date} />
      <div
        style={{ lineHeight: 2.5 }}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
    </div>
  );
};

export default BlogDetail;

export const getServerSideProps: GetServerSideProps = async context => {
  const { params, locale } = context;
  const blogData = await getBlogDataById(params?.id);
  const blogMessages = _pick(
    (await import(`../../locales/blog/${locale}.json`))?.default,
    "Blog"
  );
  const headerMessages = _pick(
    (await import(`../../locales/common/${locale}.json`))?.default,
    "LayoutHeader"
  );
  return {
    props: {
      blogData,
      messages: { ...headerMessages, ...blogMessages },
    },
  };
};
