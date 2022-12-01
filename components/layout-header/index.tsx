import Image from "next/image";
export default function LayoutHeader() {
  return (
    <header className="lg:px-14 h-12 lg:h-20 text-gray-500 flex justify-between items-center px-3 border-t-8 border-black pt-2 lg:pt-0">
      <a href="" className="flex items-center flex-shrink-0">
        <Image src="/icon.svg" alt="icon" width={28} height={28} />
        <span className="ml-4 text-2xl text-gray-900 font-bold">Ecoflow</span>
      </a>
      <nav className="flex items-center">
        <a href="" className="header_right">
          CLI
        </a>
        <a href="" className="header_right">
          Blog
        </a>
        <a href="" className="header_right">
          Pricing
        </a>
        <a
          href=""
          className="ml-8 border-2 border-black text-black rounded-lg py-2.5 px-4 text-sm bg-transparent hover:underline visited:underline visited:text-black focus:underline focus:text-black"
        >
          sing up
        </a>
        <span
          onClick={() => {
            document.documentElement.classList.add("dark");
          }}
        >
           dark
        </span>
        <span
          onClick={() => {
            document.documentElement.classList.remove("dark");
          }}
        >
           light
        </span>
      </nav>
    </header>
  );
}
