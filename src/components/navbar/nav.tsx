const NavLogo = ({ href = "/", external = false, children = undefined as any }) => {
    return (
        <div className="hover:scale-110 duration-300">
            <a href={href} target={external ? "_blank" : "_self"}>
                { children }
            </a>
        </div>
    )
}

const NavGroup = ({ children = undefined as undefined | React.ReactElement | React.ReactElement[] }) => {
    let items = new Array<React.ReactElement>();

    if (children) {
        const multiple = (children as []).length;

        if (multiple) {
            items = items.concat(children as React.ReactElement[]);
        } else {
            items.push(children as React.ReactElement);
        }
    }

    if (items) {
        return (
            <div className="flex flex-row gap-4 items-center">
                {
                    items.map((x, i) => {
                        return <div key={i}>
                            {x}
                        </div>
                    })
                }
            </div>
        )
    }

    return <div>{ children }</div>
}

const Nav = ({ children = undefined as undefined | React.ReactElement | React.ReactElement[] }) => {

    let items = new Array<React.ReactElement>();

    if (children) {
        const multiple = (children as []).length;

        if (multiple) {
            items = items.concat(children as React.ReactElement[]);
        } else {
            items.push(children as React.ReactElement);
        }
    }

    if (items) {

        return (
            <nav className="flex flex-row justify-between items-center">
                {
                    items.map((x, i) => {
                        return <div key={i}>
                            {x}
                        </div>
                    })
                }
            </nav>
        )
    }

    return ( 
        <nav></nav>
    )
}

Nav.Logo = NavLogo
Nav.Group = NavGroup

export default Nav



