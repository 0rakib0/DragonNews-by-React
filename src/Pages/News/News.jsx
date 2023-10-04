import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";

const News = () => {


    const { newsId } = useParams()

    const news = useLoaderData()

    const aNews = news.find(news => news._id == newsId)

    console.log(aNews)

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-2xl pl-2 pt-2 md:col-span-3">
                    <h1>Dragon News</h1>
                    <div className="card w-full bg-base-100 mt-6">
                        <figure><img src={aNews.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{aNews.title}</h2>
                            <p>{aNews.details}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default News;