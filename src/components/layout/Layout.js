import FloatingButton from "../floatingButton/FloatingButton";

const Layout = ({children}) => {
    return(
        <div>
            {children}
            <FloatingButton/>
        </div>
    )
}

export default Layout;