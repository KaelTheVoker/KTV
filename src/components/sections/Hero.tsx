import { KTVback } from "../backgrounds/KTV"

export const Hero = () => {
    return (
        <section
            className="
        relative
        flex items-center
        h-200 2xl:h-235
        select-none
      "
        >
            <header
                className="
          ml-auto
          xl:mr-[calc((100vw-100%)/2*-1+13rem)]
          flex flex-col
          justify-end
          text-right
        "
            >
                <h1
                    className="
            font-krona text-accent
            text-[48px]
            2xl:text-[96px]
          "
                >
                    Kael
                    <br className="md:hidden" />
                    The
                    <br className="md:hidden" />
                    Voker
                </h1>

                <p
                    className="
            font-krona
            text-[20px]
            2xl:text-[32px]
          "
                >
                    Fullstack developer
                </p>
            </header>

            <div
                className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          -z-1
          scale-40 rotate-90
          sm:rotate-0
          md:scale-50
          lg:scale-70
          xl:scale-90
          2xl:scale-115
        "
                aria-hidden="true"
            >
                <KTVback />
            </div>
        </section>
    )
}