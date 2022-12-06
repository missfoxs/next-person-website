import { useTranslations } from "next-intl";
import { GetServerSideProps } from "next";
import _pick from "lodash-es/pick";
import { getStoreBlogData } from "../lib/blog";
import Link from "next/link";

export default function Index({ blogList }: any) {
  const t = useTranslations("Index");
  console.log("blogList", blogList);

  return (
    <main className="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 className="text-5xl font-bold">{t("allBlog")}</h1>
      <div className="mt-8">
        {blogList.map(({ id, title, date }: any) => (
          <Link key={id} href={`/blogs/${id}`}>
            <div className="py-8 border-t border-gray-200 grid sm:grid-cols-3 gap-2">
              <div>{title}</div>
              <div>{id}</div>
              <div>{date}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async content => {
  const { locale } = content;
  const messages = _pick(
    (await import(`../locales/${locale}.json`))?.default,
    "Index"
  );

  const blogList = await getStoreBlogData();
  // 因为文件加密，这里读取到的都是乱码，先手动写点数据吧
  while (blogList.length) {
    blogList.pop();
  }
  blogList.push({
    id: "ssg-ssr",
    date: "2022-12-6",
    title: "When to Use Static Generation v.s. Server-side Rendering",
  });
  blogList.push({
    id: "pre-rendering",
    date: "2022-12-6",
    title: "Two Forms of Pre-rendering",
  });

  return {
    props: {
      messages,
      blogList,
    },
  };
};
