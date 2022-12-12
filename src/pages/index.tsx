import { useTranslations } from 'next-intl';
import { GetServerSideProps } from 'next';
import _pick from 'lodash-es/pick';
import { getStoreBlogData } from '../lib/blog';
import Link from 'next/link';

export default function Index({ blogList }: any) {
    const t = useTranslations('Index');
    return (
        <main className="max-w-screen-md px-4 pt-16 mx-auto">
            <h1 className="text-5xl font-bold">{t('allBlog')}</h1>
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

export const getServerSideProps: GetServerSideProps = async (content) => {
    const { locale } = content;
    const IndexMessages = _pick((await import(`../locales/index/${locale}.json`))?.default, 'Index');
    const headerMessages = _pick((await import(`../locales/common/${locale}.json`))?.default, 'LayoutHeader');
    const blogList = await getStoreBlogData();

    return {
        props: {
            messages: {
                ...headerMessages,
                ...IndexMessages,
            },
            blogList,
        },
    };
};
