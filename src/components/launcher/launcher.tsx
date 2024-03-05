const Icon = ({children = undefined as any}) => {
    return (
        <div className="invert-[.6] hover:invert duration-300 w-32 h-32">
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

const Tile = ({children = undefined as any, className="", onClick = () => {}}) => {
    return (
        <div onClick={onClick} className={`w-32 h-32 hover:scale-110 duration-300 cursor-pointer hover:shadow-lg ${className}`}>
            <div className="flex flex-col justify-center items-center w-full h-full">
                { children }
            </div>
        </div>
    )
}

const Launcher = ({ children = undefined as undefined | React.ReactElement | React.ReactElement[], className="" }) => {

    let items = new Array<React.ReactElement>();

    if (children) {
        const multiple = (children as []).length;

        if (multiple) {
            items = items.concat(children as React.ReactElement[]);
        } else {
            items.push(children as React.ReactElement);
        }
    }

    return (
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
    )
}

Tile.Icon = Icon;
Tile.Label = Label;
Launcher.Tile = Tile;

export default Launcher;