import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import News from "./News";


const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([])

    const [newses, setNews] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(respons => respons.json())
        .then(data => setCategorys(data))
    },[])

    useEffect(() =>{
        fetch('news.json')
        .then(respons => respons.json())
        .then(data => setNews(data))
    },[])
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold ">All Caterogy</h2>
            <div>
                {
                    categorys.map(category =>
                    <Link className="block ml-6 my-4 font-medium" to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
                }
            </div>
            
            <div className="px-2">
                {
                    newses.slice(0, 3).map(news =><News key={news._id} news={news}></News>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;