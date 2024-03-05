const Tile = ({children = undefined as any}) => {
    return (
        <div className="border-slate-400 rounded-3xl w-32 h-32 hover:scale-110 duration-300 hover:border-2 hover:border-slate-200 hover:bg-slate-500 cursor-pointer hover:shadow-lg hover:drop">
            <div className="flex justify-center items-center w-full h-full">
                { children }
            </div>
        </div>
    )
}

const Launcher = ({ children = undefined as undefined | React.ReactElement | React.ReactElement[]}) => {

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
        <div className="w-full grid grid-cols-2 gap-8">
            {
                items.map((x, i) => {
                    return <div key={i} className="flex justify-center">
                        {x}
                    </div>
                })
            }
        </div>
    )
}

Launcher.Tile = Tile;

export default Launcher;