import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function PostDetail({ id, blog, messages }: any) {
  const router = useRouter();
  // 在这里也可以获取路由信息，完成客户端渲染
  console.log(router, router.query);
  const t = useTranslations('PostDetail');
  
  return (
    <div>
      post detail id: {id}
      <p>{blog}</p>
      <p>{t("title")}</p>
    </div>
  );
}

function getBlogDetail(id: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${id}, this is detail`);
    }, 1000);
  });
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { params, query, locale, locales } = context;
  console.log("locale", locale, locales);
  const messages = (await import(`../../locales/${locale}.json`))?.default;
  console.log("messages", JSON.stringify(messages));

  // const id = params?.posts?.[1]; //文件夹路由动态 {posts: ['posts', 1]}
  const { slug } = params as any;
  const blog = await getBlogDetail(slug);
  console.log("params,", context.params, query, "blog content: ", blog);
  // params, { slug: [ 'a', '1' ] } { name: '5', slug: [ 'a', '1' ] } blog content:  a,1, this is detail
  return {
    props: {
      id: slug,
      blog,
      messages
    },
  };
};
