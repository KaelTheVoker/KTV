import { Experience } from "../components/sections/Experience"
import { GetInTouch } from "../components/sections/GetInTouch"
import { Hero } from "../components/sections/Hero"
import { Principles } from "../components/sections/Principles"
import { Scope } from "../components/sections/Scope"
import { Tools } from "../components/sections/Tools"

export const MainPage = () => {

    return (
        <>
            <div
            >
                <div className="flex flex-col items-center justify-center overflow-hidden">
                    <div className="text-text w-[85%] max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Hero />
                        <Scope />
                        <Tools />
                        <Experience />
                        <Principles />
                        <GetInTouch />
                    </div>

                    <footer
                        className="
              bg-[#090909]
              flex flex-col justify-center items-center gap-10
              h-75 2xl:h-100 w-full
              border-t border-stroke
              relative mt-10 md:mt-15 lg:mt-20 xl:mt-25
            "
                    >
                        <p
                            className="
                font-krona 
                opacity-50 hover:opacity-65 duration-100
                select-none 
                text-[24px] md:text-[32px] lg:text-[36px]
                xl:text-[40px] 2xl:text-[48px] 
                text-text
              "
                        >
                            D2 team
                        </p>

                        <div className="2xl:hidden w-1/2 h-px bg-white opacity-25" />

                        <p
                            className="
                2xl:absolute 2xl:right-10 2xl:bottom-10 2xl:text-[20px]
                text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px]
                text-text opacity-50 font-light select-none
                text-center md:text-left
              "
                        >
                            © 2025 Daniil R. (KaelTheVoker)
                            <br />
                            All rights reserved.
                        </p>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default MainPage;