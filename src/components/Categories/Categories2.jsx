import React from 'react';
import furniture from '/category/sofa.webp';
import skinCare from '/category/moisturizer.webp';
import hairCare from '/category/shampoo.webp';
import laptops from '/category/laptop.webp';
import kitchenWare from '/category/bowles.webp';
import headPhones from '/category/headphones.webp';
import beddings from '/category/beddings.webp';
import homeDecore from '/category/vase.webp';
import Equipment from '/category/tractor.webp';
import storage from '/category/storage.webp';
import Skincare from '/category/moisturizer.webp';
import categories from '/category/categories.jpg';
import Fragrances from '/category/perfume.webp';
import personal from '/category/hair dryer.webp';
import Laptops from '/category/laptop.webp';
import Headphones from '/category/headphones.webp';
import Cameras from '/category/camera.webp';
import Gaming from '/category/gaming.webp';
import Audio from '/category/audio.webp';
import Accessories from '/category/accessories.webp'
import CardReverse from '../Shared/Cards/CardReverse';
import { key } from 'localforage';
import { Link } from 'react-router-dom';

const Categories = () => {
    // Define header style directly to ensure maximum control
    const headerStyle = {
        height: '24px',
        lineHeight: '24px',
        fontSize: '12px',
        paddingLeft: '4px',
        paddingRight: '4px',
        backgroundColor: '#1f2937', // bg-gray-800
        color: 'white',
        border: '1px dashed #6b7280', // border-gray-500
        overflow: 'hidden'
    };

    return (
        <div className="container mx-auto p-4 bg-white">
            <div className="grid grid-cols-6  gap-4">
                {/* Headers - using direct style control */}
                {/* <div className="col-span-2" style={headerStyle}>Home and garden</div>
                <div className="col-span-2" style={headerStyle}>Beauty & Personal Care</div>
                <div className="col-span-2" style={headerStyle}>Electronics & Technology</div> */}

                {/* Home and garden section done */}
                {/* Furniture */}
                <div className="col-span-2 row-span-2 col-start-1 row-start-2 bg-white text-white">
                    <Link to="/categories/furnitures" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-1.5rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={furniture} imgTitle={"Furniture"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/sofa.webp" alt="Furniture" /> */}
                        </div>
                    </Link>
                </div>
                {/* Kitchenware done*/}
                <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-white text-white">
                    {/* <div className="mb-1">Kitchenware</div> */}
                    <Link to="/categories/kitchenWare" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={kitchenWare} imgTitle={"Kitchenware"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/bowles.webp" alt="Kitchenware" /> */}
                        </div>
                    </Link>
                </div>
                {/* Bedding done*/}
                <div className="col-start-1 row-start-6 bg-white text-white">
                    {/* <div className="mb-1">Bedding</div> */}
                    <Link to="/categories/beddings" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={beddings} imgTitle={"Bedding"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/beddings.webp" alt="Bedding" /> */}
                        </div>
                    </Link>
                </div>
                {/* Home Decor done*/}
                <div className="col-start-2 row-start-6 bg-white text-white">
                    {/* <div className="mb-1">Home Decor</div> */}
                    <Link to="/categories/homeDecore" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={homeDecore} imgTitle={"Home Decoration"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/vase.webp" alt="Home Decor" /> */}
                        </div>
                    </Link>
                </div>
                {/* Equipment done */}
                <div className="col-start-1 row-start-7 bg-white text-white">
                    {/* <div className="mb-1">Equipment</div> */}
                    <Link to="/categories/equipment" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={Equipment} imgTitle={"Equipment"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/tractor.webp" alt="Equipment" /> */}
                        </div>
                    </Link>
                </div>
                {/* Storage & Organization done*/}
                <div className="col-start-2 row-start-7 bg-white text-white">
                    {/* <div className="mb-1">Storage & Organization</div> */}
                    <Link to="/categories/storage" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={storage} imgTitle={"Storage And Equipment"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/storage.webp" alt="Storage" /> */}
                        </div>
                    </Link>
                </div>
                {/* Beauty & Personal Care section done */}
                <div className="row-span-2 col-start-3 row-start-2 bg-white text-white">
                    {/* <div className="mb-1">Skincare</div> */}
                    <Link to="/categories/skinCare" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={skinCare} imgTitle={"Skincare"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/moisturizer.webp" alt="Skincare" /> */}
                        </div>
                    </Link>
                </div>
                {/* Hair Care */}
                <div className="row-span-2 col-start-4 row-start-2 bg-white text-white">
                    <Link to="/categories/hairCare" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={hairCare} imgTitle={"Hair Care"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/shampoo.webp" alt="Hair Care" /> */}
                        </div>
                    </Link>
                </div>
                {/* Categories */}
                <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-white text-white">
                    <div className="w-full h-[calc(100%-.25rem)]">
                        <img className="w-full h-full object-cover" src="/category/categories.jpg" alt="Categories" />
                    </div>
                </div>

                {/* Fragrances done*/}
                <div className="row-span-2 col-start-3 row-start-6 bg-white text-white">
                    {/* <div className="mb-1">Fragrances</div> */}
                    <Link to="/categories/fragrances" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={Fragrances} imgTitle={"Fragrances"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/perfume.webp" alt="Fragrances" /> */}
                        </div>
                    </Link>
                </div>
                {/* Personal Care Appliances done */}
                <div className="row-span-2 col-start-4 row-start-6 bg-white text-white">
                    {/* <div className="mb-1">Personal Care Appliances</div> */}
                    <Link to="/categories/personal" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={personal} imgTitle={"Personal Care Appliances"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/hair dryer.webp" alt="Appliances" /> */}
                        </div>
                    </Link>
                </div>

                {/* Electronics & Technology section done*/}
                <div className="col-span-2 row-span-2 col-start-5 row-start-2 bg-white text-white">
                    {/* <div className="mb-1">Laptops</div> */}
                    <Link to="/categories/laptops" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={laptops} imgTitle={"Laptops"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/laptop.webp" alt="Laptops" /> */}
                        </div>
                    </Link>
                </div>
                {/* headphones done */}
                <div className="col-span-2 row-span-2 col-start-5 row-start-4 bg-white text-white">
                    {/* <div className="mb-1">Headphones</div> */}
                    <Link to="/categories/headPhones" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={headPhones} imgTitle={"Headphones"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/headphones.webp" alt="Headphones" /> */}
                        </div>
                    </Link>
                </div>

                {/* Additional Electronics categories */}
                <div className="col-span-1 row-span-1 col-start-5 row-start-6 bg-white text-white">
                    {/* <div className="mb-1">Cameras</div> */}
                    <Link to="/categories/cameras" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={Cameras} imgTitle={"Cameras"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/camera.webp" alt="Cameras" /> */}
                        </div>
                    </Link>
                </div>
                {/* Gaiming done */}
                <div className="col-span-1 row-span-1 col-start-6 row-start-6 bg-white text-white">
                    {/* <div className="mb-1">Gaming</div> */}
                    <Link to="/categories/gaming" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={Gaming} imgTitle={"Gaming"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/gaming.webp" alt="Gaming" /> */}
                        </div>
                    </Link>
                </div>
                {/* Audio done*/}
                <div className="col-span-1 row-span-1 col-start-5 row-start-7 bg-white text-white">
                    {/* <div className="mb-1">Audio</div> */}
                    <Link to="/categories/audio" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={Audio} imgTitle={"Audio"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/audio.webp" alt="Audio" /> */}
                        </div>
                    </Link>
                </div>
                {/* Accesssories done */}
                <div className="col-span-1 row-span-1 col-start-6 row-start-7 bg-white text-white">J
                    {/* <div className="mb-1">Accessories</div> */}
                    <Link to="/categories/accessories" onClick={() => console.log('clicked')}>
                        <div className="w-full h-[calc(100%-1.25rem)]">
                            <CardReverse className="w-full h-full object-cover" imgSource={Accessories} imgTitle={"Accessories"}></CardReverse>
                            {/* <img className="w-full h-full object-cover" src="/category/accessories.webp" alt="Accessories" /> */}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories; 