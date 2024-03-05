import { createContext, useContext } from "react"

const LauncherContext = createContext({ layout: "grid" as "grid" | "nav" });

const Icon = ({children = undefined as any}) => {
    const context = useContext(LauncherContext);
    const sizing = context.layout === "grid" ? "w-32 h-32" : "w-12 h-12";

    return (
        <div className={`invert-[.6] hover:invert duration-300 ${sizing}`}>
            { children }
        </div>
    )
}

const Label = ({children = undefined as any}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const Tile = ({size = "grid" as "grid" | "nav", children = undefined as any, className="", onClick = () => {}}) => {

    const context = useContext(LauncherContext);
    const sizing = context.layout === "grid" ? "w-32 h-32" : "w-12 h-12";

    return (
        <div onClick={onClick} className={`${sizing} hover:scale-110 duration-300 cursor-pointer hover:shadow-lg ${className}`}>
            <div className="flex flex-col justify-center items-center w-full h-full">
                { children }
            </div>
        </div>
    )
}

const Launcher = ({ layout = "grid" as "grid" | "nav", children = undefined as undefined | React.ReactElement | React.ReactElement[], className="" }) => {

    let items = new Array<React.ReactElement>();

    if (children) {
        const multiple = (children as []).length;

        if (multiple) {
            items = items.concat(children as React.ReactElement[]);
        } else {
            items.push(children as React.ReactElement);
        }
    }

    if (layout === "grid") {
        return (
            <LauncherContext.Provider value={{layout: layout}}>
                <div className={`w-full flex justify-center items-center font-mono ${className}`}>
                    <div className="w-96 h-96 grid grid-cols-2 gap-8">
                        {
                            items.map((x, i) => {
                                return <div key={i} className="flex justify-center animate-pop">
                                    {x}
                                </div>
                            })
                        }
                    </div>
                </div>
            </LauncherContext.Provider>
        )
    }

    return (
        <LauncherContext.Provider value={{layout: layout}}>
            <div className={`flex flex-row flex-wrap md:flex-col mb-12 md:mr-12 justify-center items-center font-mono gap-16 ${className}`}>
                {
                    items.map((x, i) => {
                        return <div key={i} className="flex justify-center animate-pop">
                            {x}
                        </div>
                    })
                }
            </div>
        </LauncherContext.Provider>
    )
}

Tile.Icon = Icon;
Tile.Label = Label;
Launcher.Tile = Tile;

export default Launcher;