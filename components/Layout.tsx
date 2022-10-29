import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";

const Layout = ({ children }: any) => {
    return (
        <div className="content">
            <CustomHeader />
            { children }
            <CustomFooter />
        </div>
    )
}

export default Layout;