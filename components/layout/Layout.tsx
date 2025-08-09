import Footer from "./Footer";
import Header from "./Header";
import { FC } from "react"
import { LayoutProps } from "@/interfaces";

const Layout: FC<LayoutProps> = ({ children }) => {
    return(
        <>
            <Header/>
            <main className="min-h-screen">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;