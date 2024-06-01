import { useState } from 'react';
import riview1 from "../../img/riview-john.jpg";
import riview2 from "../../img/riview-bagas.jpg";
import riview3 from "../../img/riview-karina.jpg";
import riview4 from "../../img/riview-mursid.jpg";

const Ratings = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ratings = [
        {
            name: "John Doe",
            comment: "The food and drinks at here are fantastic, with a great variety and excellent flavors. The atmosphere is cozy and perfect for relaxing. However, I was a bit disappointed with the wait time for my order, as it took longer than expected due to the high volume of orders. Overall, still a great place to dine if you don't mind the wait",
            image: riview1,
            src: '',
            star: 4.6,
        },
        {
            name: "Dwi Bagaskara",
            comment: "Snacking here is satisfying, from savory to sweet, everything is delicious 😍 For those who love to snack, we highly recommend trying it out! The variety of snacks is unique and super tasty 👍🏻",
            image: riview2,
            src: "https://vt.tiktok.com/ZSYjEb1jL/",
            star: 4.8,
        },
        {
            name: "Karina Sihombing",
            comment: "The ambiance is cozy, and the food is top-notch. Every dish is crafted with care and bursts with flavor. The staff is incredibly friendly and attentive, making you feel right at home. Highly recommended for anyone looking for a great meal and a warm atmosphere. Five stars",
            image: riview3,
            src: '',
            star: 5,
        },
        {
            name: "Mursid",
            comment: "that's great, wellllll",
            image: riview4,
            src: "https://vt.tiktok.com/ZSYjoddbw/",
            star: 5,
        },
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === ratings.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? ratings.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='pt-12 pb-28 overflow-hidden relative'>
            <h1 className='text-center sm:text-3xl text-xl font-semibold text-primary mb-14'>
                People's Reviews
            </h1>

            <div className="relative w-full sm:px-6 px-0 flex justify-between items-center">
                <button
                    className="text-5xl text-primary sm:translate-x-0 translate-x-4 z-10"
                    onClick={prevSlide}
                >
                    ❮
                </button>

                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {ratings.map((rating, index) => (
                            <div className='flex-shrink-0 w-full flex flex-col md:flex-row lg:px-20 px-5 gap-6' key={index}>
                                <div className='lg:w-1/4 w-1/2 h-auto mx-auto rounded-md'>
                                    <img
                                        src={rating.image}
                                        alt={`Slide ${index + 1}`}
                                        className="object-cover rounded-md w-full h-full"
                                    />
                                </div>
                                <div className='text-center md:w-3/4 w-full mx-auto flex flex-col justify-center md:items-start items-center'>
                                    <h2 className='inline-block sm:text-3xl text-2xl capitalize font-semibold mb-1'>
                                        {rating.name}
                                    </h2>
                                    {rating.src ? (
                                        <div className='leading-4 mt-2'>
                                            <span>
                                                Source:
                                            </span>
                                            <br className='md:hidden block' />
                                            <a href={rating.src} className='ml-2 text-purple-500'>
                                                {rating.src}
                                            </a>
                                        </div>
                                    ) : (
                                        <div className='flex gap-[6px] items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-star-fill inline w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <span className='text-xl'>
                                                {rating.star}/5
                                            </span>
                                        </div>
                                    )}
                                    <p className='mt-6 md:text-left text-center'>
                                        " {rating.comment} "
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="text-5xl text-primary sm:translate-x-0 -translate-x-4 z-10"
                    onClick={nextSlide}
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Ratings;
