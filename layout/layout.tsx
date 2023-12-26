import Sidebar from "./sidebar/sidebar";
import {LayoutProps} from "interface/layout.props";
import {AuthProvider} from "../context/authProvider";
import Header from "layout/header/header";
import styles from "./layout.module.css";
import Profile from "layout/profile/profile";
const Layout = (props :LayoutProps) =>{
    return(
        <AuthProvider>
            <div className={styles.container}>

                <div className={styles.sidebar}>
                    <Sidebar/>
                </div>



                <main className={styles.main}>
                    <Header />
                    {props.children}

                    
                </main>




            </div>


        </AuthProvider>

    )
}

export default Layout;