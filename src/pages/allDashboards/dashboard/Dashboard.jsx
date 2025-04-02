import { Outlet } from "react-router-dom";
import DashboardNav from "../dashboardNav/DashboardNav";


const Dashboard = () => {
    return (
        <div className="">
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;