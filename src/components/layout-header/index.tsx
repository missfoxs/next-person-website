import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SwitchLanage from '../switch-lanage';
import SwitchTheme from '../switch-theme';

export default function LayoutHeader() {
    // const { route, locale, locales, push } = useRouter();
    const routeInfo = useRouter();
    const { asPath, push, locale, locales } = routeInfo;
    console.log('route', routeInfo);
    const t = useTranslations('LayoutHeader');

    const otherLocal = locales?.find((item) => item !== locale);

    return (
        <header className="lg:px-14 h-12 lg:h-20 flex justify-between items-center px-3 border-t-8 border-black pt-2 lg:pt-0">
            <Link href="/" className="flex items-center flex-shrink-0">
                <Image src="/icon.svg" alt="icon" width={28} height={28} />
                <span className="ml-4 text-2xl font-bold">Ecoflow</span>
            </Link>
            <nav className="flex items-center">
                {/* Link 和 a标签的区别，没有使用强制刷新页面，否则网站的亮暗模式会失效 */}
                <Link href="/" className="header_right">
                    {t('nav1')}
                </Link>
                <Link href="/animation" className="header_right">
                    {t('nav2')}
                </Link>
                <Link href="/" className="ml-8 border-2 rounded-lg py-2.5 px-4 text-sm bg-transparent hover:underline visited:underline focus:underline">
                    sing up
                </Link>
                <SwitchTheme />
                {/* 这里应该有编程式的实现吧 */}
                {/* 如果是动态的页面，这里不能用router要用asPath */}
                <Link href={asPath} locale={otherLocal}>
                    <SwitchLanage />
                </Link>
                {/* <span onClick={() => push(otherLocal)}>
          <SwitchLanage />
        </span> */}
            </nav>
        </header>
    );
}
