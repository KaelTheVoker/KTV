import { TEXTS } from "../../texts";

import { QuoteBack } from "../backgrounds/Quote";
import { Bubble } from "../Bubble";

import useGetLang from "../../hooks/useGetLang";

export const Principles = () => {
    const lang = useGetLang();
    const t = TEXTS[lang];

    return (
        <section className="flex flex-col mt-40">
            <h2
                className="
          2xl:text-[36px]
          text-[24px]
          font-bold
          text-right
        "
            >
                {t.principles.title}
            </h2>

            <blockquote
                className="
          relative
          text-[16px]
          md:text-[20px]
          lg:text-[24px]
          xl:text-[28px]
          2xl:text-[32px]
          2xl:mt-30
          mt-10
          w-full
          opacity-75
          text-center
          self-center
        "
            >
                <p>{t.principles.description}</p>

                <QuoteBack
                    className="
            absolute
            md:scale-40
            lg:scale-60
            -top-20
            -left-20
            scale-35
          "
                    aria-hidden="true"
                />
                <QuoteBack
                    className="
            absolute
            md:scale-40
            lg:scale-60
            top-5
            -right-15
            scale-35
          "
                    aria-hidden="true"
                />
            </blockquote>

            <div
                className="
          w-full
          mx-auto
          mt-10
          2xl:mt-3
          overflow-visible
        "
            >
                <ul
                    className="
            inline-flex
            flex-nowrap
            gap-5
            md:flex
            md:justify-center
            md:flex-wrap
            animate-marquee-slow
            list-none
          "
                    aria-label={t.principles.title}
                >
                    {t.bestPractices.map((text, i) => (
                        <li key={i}>
                            <Bubble
                                text={text}
                                className="
                  2xl:text-[24px]
                  xl:text-[22px]
                  lg:text-[20px]
                  md:text-[18px]
                  text-[16px]
                  px-5
                  shrink-0
                "
                            />
                        </li>
                    ))}

                    {t.bestPractices.map((text, i) => (
                        <li key={'dup-' + i} className="md:hidden">
                            <Bubble
                                text={text}
                                className="
                  2xl:text-[24px]
                  xl:text-[22px]
                  lg:text-[20px]
                  md:text-[18px]
                  text-[16px]
                  px-5
                  shrink-0
                "
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};