import NavBar from "@components/NavBar"
import SideBar from "@components/SideBar"

const DashBoard = () => {
    return (
        <div className="flex flex-row">
            <SideBar />
            <div className="flex-1">
                Dashboard
            </div>
        </div>
    );
}

export default DashBoard;