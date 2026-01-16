import { TEXTS } from "../../texts";

import { DiscordIcon } from "../icons/DiscordIcon";
import { GitIcon } from "../icons/GitIcon";
import { MainIcon } from "../icons/MainIcon";
import { TelegramIcon } from "../icons/TelegramIcon";
import { VkIcon } from "../icons/VkIcon";
import useGetLang from "../../hooks/useGetLang";

export const GetInTouch = () => {
    const lang = useGetLang();
    const t = TEXTS[lang];

    return (
        <section className="flex flex-col mt-40">
            <h2 className="2xl:text-[36px] text-[28px] font-bold text-left">
                {t.contact.title}
            </h2>

            <nav
                className="
          self-center mt-10  
          flex flex-row flex-wrap justify-center items-center gap-10 md:gap-12.5
          bg-white/5 border border-stroke p-6 md:p-4 rounded-[15px]
          max-w-md md:max-w-none
        "
                aria-label={t.contact.title || "Связаться со мной"}
            >
                <ul className="flex flex-row flex-wrap justify-center items-center gap-10 md:gap-12.5 list-none">
                    <li>
                        <MainIcon className="order-1" />
                    </li>
                    <li>
                        <TelegramIcon className="order-2" />
                    </li>
                    <li>
                        <VkIcon className="order-3" />
                    </li>
                    <li>
                        <GitIcon className="order-4" />
                    </li>
                    <li>
                        <DiscordIcon className="order-5" />
                    </li>
                </ul>
            </nav>
        </section>
    );
};