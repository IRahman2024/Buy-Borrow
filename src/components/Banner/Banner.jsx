import { useEffect, useRef, useState } from 'react';

const Banner = () => {
    const totalItems = 4;
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % totalItems);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // cleanup
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth / totalItems;
            carouselRef.current.scrollTo({
                left: scrollWidth * currentIndex,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div>
            <div className="carousel w-full overflow-hidden" ref={carouselRef}>
                <div className="carousel-item w-full">
                    <img src='/5256934.jpg' className="w-full size-96 rounded-3xl" />
                </div>
                <div className="carousel-item w-full">
                    <img src='/6003842.jpg' className="w-full size-96 rounded-3xl" />
                </div>
                <div className="carousel-item w-full">
                    <img src="/9887466.jpg" className="w-full size-96 rounded-3xl" />
                </div>
                <div className="carousel-item w-full">
                    <img src="/Professional-Sale-Advertising-Banner-for-Instagram.webp" className="w-full size-96 rounded-3xl" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                {[...Array(totalItems)].map((_, i) => (
                    <button key={i} onClick={() => setCurrentIndex(i)} className="btn btn-xs">
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
