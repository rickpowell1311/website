const Line = ({ includeInputDelimiter = true, children = undefined as any }) => {
    if (!includeInputDelimiter) {
        return <div className="min-h-4">{children}</div>
    }

    return (
        <div className="flex flex-row gap-2 min-h-4">
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

const Console = ({ children = undefined as any, onClose = () => {}}) => {
    return (
        <div className="w-full min-h-40 font-mono bg-black border-solid border-slate-500 border-2">
            <div className="w-full bg-slate-500">
                <div className="flex py-2 px-3 gap-4 flex-row-reverse cursor-pointer" onClick={onClose}>
                    <p className="text-3xl leading-none -mt-2">x</p>
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