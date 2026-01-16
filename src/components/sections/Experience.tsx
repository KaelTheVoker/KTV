import { TEXTS } from "../../texts";
import { CurlyBack } from "../backgrounds/Curly";
import { Bubble } from "../Bubble";

import useGetLang from "../../hooks/useGetLang";

export const Experience = () => {
    const lang = useGetLang();
    const t = TEXTS[lang];

    return (
        <section className="flex flex-col 2xl:mt-40 mt-30 relative">

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
                {t.experience.title}
            </h2>

            <ul className="flex flex-col gap-3 mt-10 2xl:ml-10 list-none">
                {t.experience.items.map((text, i) => (
                    <li key={i}>
                        <Bubble
                            text={text}
                            className="
                text-[16px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[22px]
                2xl:text-[24px]
                rounded-xl
                xl:rounded-full
                lg:py-2
                py-4
                px-4
              "
                        />
                    </li>
                ))}
            </ul>

            <div
                className="
          absolute
          md:rotate-0
          lg:left-200
          lg:scale-65
          xl:scale-75
          xl:left-300
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          scale-60
          rotate-90
          pointer-events-none
          -z-1
        "
                aria-hidden="true"
            >
                <CurlyBack />
            </div>
        </section>
    );
};