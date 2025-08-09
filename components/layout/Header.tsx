import Link from "next/link"

const Header: React.FC = () =>{
    return(
        <header className="grid grid-cols-5">
            <div className="col-span-1">
                <input type="text" placeholder="search"/>
            </div>
            <nav className="col-span-3">
                <div className="grid grid-cols-6 gap-1">
                    <Link className="no-underline mx-1" href="/">Rooms</Link>
                    <Link className="no-underline mx-1" href="/">Mansion</Link>
                    <Link className="no-underline mx-1" href="/">Countryside</Link>
                    <Link className="no-underline mx-1" href="/">Appartment</Link>
                    <Link className="no-underline mx-1" href="/">Villa</Link>
                </div>
            </nav>
            <div className="col-span-1 flex justify-even">
                <button className="rounded-lg mx-[8px] px-[8px] py-[6px] bg-green-200 border" style={{backgroundColor: "green"}}>Sign In</button>
                <button className="rounded-lg border">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;