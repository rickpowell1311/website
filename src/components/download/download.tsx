import ArrowDownTrayIcon from "../../assets/arrow-down-tray.svg";

export const Download = ({ url = "/", fileName = "file", description = "Download" }) => {
    return (
        <a href={url} className="flex flex-col items-center hover:scale-110 duration-300 cursor-pointer hover:shadow-lg font-mono" download={fileName}>
            <img src={ArrowDownTrayIcon} alt="Download" className="w-12 h-12 invert" />
            {description}
        </a>
    )
}