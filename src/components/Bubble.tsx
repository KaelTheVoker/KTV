
export const Bubble = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={`

        rounded-full
        border border-stroke
        bg-card-bg backdrop-blur-[7px]
        
        hover:bg-card-bg-hover
        hover:scale-102

        active:bg-card-bg-hover
        active:scale-102

        duration-150

        w-fit

        px-3 py-0.5
        select-none
             ${className}`}>
            <p className="text-text self-center text-center">{text}</p>
        </div>
    )
}