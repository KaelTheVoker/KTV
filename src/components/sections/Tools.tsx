import { TEXTS } from "../../texts";

import { BracketsBack } from "../backgrounds/Brackets";
import { Bubble } from "../Bubble";
import useGetLang from "../../hooks/useGetLang";


export const Tools = () => {
    const lang = useGetLang();

    const t = TEXTS[lang];


    return (
        <section className="relative flex flex-col mt-10 md:mt-20 lg:mt-35">
            {/* Title */}
            <p
                className="
          text-right font-bold
          text-[24px]
          md:text-[28px]
          lg:text-[30px]
          2xl:text-[36px]
        "
            >
                {t.tools.title}
            </p>

            {/* Content */}
            <div
                className="
          mt-20
          flex flex-col gap-10
          md:flex-row md:gap-8 md:justify-between
          2xl:gap-1 relative
        "
            >

                <BracketsBack
                    className="
          absolute pointer-events-none -z-1
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          scale-50 rotate-90
          md:scale-60 md:rotate-0
          2xl:scale-100
        "
                />

                <div className="flex flex-col flex-1">
                    <p
                        className="
              mb-6 self-center font-bold
              text-[24px]
              md:text-[26px]
              2xl:text-[32px]
            "
                    >
                        Frontend
                    </p>

                    <div
                        className="
              flex gap-3 items-center
              overflow-x-auto scrollbar-hide
              -mx-6.5 px-6.5
              md:overflow-visible md:mx-0 md:px-0
              md:flex-wrap md:justify-center
              2xl:flex-col 2xl:items-center 2xl:gap-5
            "
                    >
                        {t.tools.frontend.items.map(name => (
                            <Bubble
                                key={name}
                                text={name}
                                className="
                  px-4 py-2
                  text-[16px]
                  md:text-[18px]
                  2xl:text-[24px]
                "
                            />
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="
            self-center bg-white opacity-20
            h-[0.5px] w-30
            md:h-60 md:w-[0.5px]
            2xl:h-80
          "
                />

                {/* Backend */}
                <div className="flex flex-col flex-1">
                    <p
                        className="
              mb-6 self-center font-bold
              text-[24px]
              md:text-[26px]
              2xl:text-[32px]
            "
                    >
                        Backend
                    </p>

                    <div
                        className="
              flex gap-3 items-center
              overflow-x-auto scrollbar-hide
              -mx-6.5 px-6.5
              md:overflow-visible md:mx-0 md:px-0
              md:flex-wrap md:justify-center
              2xl:flex-col 2xl:items-center 2xl:gap-5
            "
                    >
                        {t.tools.backend.items.map(name => (
                            <Bubble
                                key={name}
                                text={name}
                                className="
                  px-4 py-2
                  text-[16px]
                  md:text-[18px]
                  2xl:text-[24px]
                "
                            />
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="
            self-center bg-white opacity-20
            h-[0.5px] w-30
            md:h-60 md:w-[0.5px]
            2xl:h-80
          "
                />

                {/* Infra */}
                <div className="flex flex-col flex-1">
                    <p
                        className="
              mb-6 self-center font-bold
              text-[24px]
              md:text-[26px]
              2xl:text-[32px]
            "
                    >
                        Infra
                    </p>

                    <div
                        className="
              flex gap-3 items-center
              overflow-x-auto scrollbar-hide
              -mx-6.5 px-6.5
              md:overflow-visible md:mx-0 md:px-0
              md:flex-wrap md:justify-center
              2xl:flex-col 2xl:items-center 2xl:gap-5
            "
                    >
                        {t.tools.infra.items.map(name => (
                            <Bubble
                                key={name}
                                text={name}
                                className="
                  px-4 py-2
                  text-[16px]
                  md:text-[18px]
                  2xl:text-[24px]
                "
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};