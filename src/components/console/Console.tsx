const Line = ({ children = undefined as any }) => {
    return (
        <div className="flex flex-row gap-2">
            <div><p>|&gt;</p></div>
            <div className="flex flex-row">{ children }</div>
        </div>
    )
}

const Text = ({ text = ''}) => {
    return (
        <p>{ text }</p>
    )
}

const Cursor = () => {
    return <span className="animate-blink">|</span>
}

const Console = ({ children = undefined as any}) => {
    return (
        <div className="w-full h-96 font-mono bg-black border-solid border-slate-500 border-2">
            <div className="w-full bg-slate-500">
                <div className="flex px-4 gap-4 flex-row-reverse">
                    <p className="text-5xl leading-none -mt-3">-</p>
                </div>
            </div>
            <div className="p-4">
                { children }
            </div>
        </div>
    )
}

Line.Text = Text;
Line.Cursor = Cursor;
Console.Line = Line;
Console.Line.Cursor = Cursor;

export default Console