import { TEXTS } from "../../texts";

import { DotsBack } from "../backgrounds/Dots";
import { Bubble } from "../Bubble";
import useGetLang from "../../hooks/useGetLang";

export const Scope = () => {
    const lang = useGetLang();
    const t = TEXTS[lang];

    return (
        <section className="flex flex-col relative 2xl:mb-30 mb-20">
            <h2
                className="
          font-bold
          text-[24px]
          md:text-[28px]
          lg:text-[30px]
          xl:text-[32px]
          2xl:text-[36px]
        "
            >
                {t.scope.title}
            </h2>

            <ul
                className="
          self-center
          2xl:flex-row
          2xl:flex
          grid
          sm:grid-cols-2
          md:grid-cols-3
          lg:flex
          lg:flex-row
          flex-col
          items-center
          gap-5
          2xl:justify-between
          justify-items-center
          justify-center
          mt-10
          list-none
        "
                aria-label={t.scope.title || "Сферы деятельности"}
            >
                {t.scope.items.map((text, i) => (
                    <li key={i} className="self-center">
                        <Bubble
                            text={text}
                            className="
                font-medium
                text-[16px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[22px]
                2xl:text-[24px]
                px-4
                py-2
                whitespace-nowrap
              "
                        />
                    </li>
                ))}
            </ul>

            <div
                className="
          absolute
          2xl:top-25
          2xl:scale-115
          2xl:rotate-0
          sm:rotate-0
          sm:top-40
          md:scale-85
          md:top-30
          lg:scale-100
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          scale-70
          rotate-90
          pointer-events-none
          -z-1
        "
                aria-hidden="true"
            >
                <DotsBack />
            </div>
        </section>
    );
};