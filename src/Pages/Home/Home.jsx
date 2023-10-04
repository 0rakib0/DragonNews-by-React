import { useContext } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";
import LatestNews from "./LatestNews";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {

    const newses = useLoaderData()
    
    const {name} = useContext(authContext)
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="py-6 md:col-span-2">
                    {
                        newses.map(news =><NewsCard key={news._id} news ={news}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;