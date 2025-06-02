import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories(unused)";
import Categories2 from "../Categories/Categories2";
import FlashSale from "../Flash Sale/FlashSale";
import Card from "../Shared/Cards/Card";
import CardReverse from "../Shared/Cards/CardReverse";
import HoverCard from "../Shared/Cards/HoverCard";
import furniture from '/category/sofa.webp';

const Homepage = () => {
    return (
        <div>
            <div className="mx-48 mt-6">
                <Banner></Banner>
            </div>
            <div className="mt-6">
                <FlashSale></FlashSale>
            </div>
            <div className="mt-6">
                {/* <Categories></Categories> */}
                <Categories2></Categories2>
            </div>
            <div className="grid p-20 bg-emerald-500 justify-items-center gap-y-2 text-center">
                <p className="text-2xl font-bold">Want to start selling?</p>
                <p className="w-96">List your products for sale or rental and start earning today. It's easy to get started!</p>
                <Link to='/login' className="btn btn-warning btn-sm w-48">Become a seller!</Link>
            </div>
        </div>
    );
};

export default Homepage;