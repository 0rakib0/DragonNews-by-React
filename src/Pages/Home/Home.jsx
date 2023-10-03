import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border-2 md:col-span-2">
                    <h2>News Comming soon</h2>
                </div>
                <div className="border-2">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;