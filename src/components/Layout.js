import Header from "./Header";
import NavBar from "./NavBar";
function Layout({children}) {
    return ( 
        <>
            <NavBar/>
            <div className="content">
                {children}
            </div>
            </>
     );
}

export default Layout;