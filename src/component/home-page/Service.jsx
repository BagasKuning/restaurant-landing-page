import { useState, useRef, useEffect } from 'react';

export default function Service() {
    const [openIndex, setOpenIndex] = useState(null);
    const [heights, setHeights] = useState([]);

    const serviceRefs = useRef([]);

    const calculateHeights = () => {
        setHeights(serviceRefs.current.map(ref => ref.scrollHeight));
    };

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        calculateHeights();
        window.addEventListener('resize', calculateHeights);
        return () => {
            window.removeEventListener('resize', calculateHeights);
        };
    }, []);


    const services = [
        {
            title: "Quality Food and Drinks",
            desc: "At Here, We pride ourselves on serving dishes made from fresh, high-quality ingredients. Our menu is varied, from healthy noodles with delicious eggs to perfectly brewed coffee. Every bite and sip is the result of our dedication to culinary excellence.",
        },
        {
            title: "Delicious and Healthy Breakfast",
            desc: "Start your day with the delicious and nutritious breakfast options we offer. From colorful smoothie bowls to indulgent avocado toast, breakfast at Chill Corner is designed to provide energy and happiness throughout your day.",
        },
        {
            title: "Online Ordering and Delivery Service",
            desc: "For your convenience, we provide a fast and easy online ordering service. Not only that, our delivery service ensures you can enjoy your favorite dishes without having to leave home. Just order, and we'll deliver it straight to your door.",
        },
        {
            title: "Events and Special Events",
            desc: "Chill Corner is the perfect choice for a variety of events, from business meetings to private celebrations. Our flexible space can be tailored to your needs. We also provide catering services for your off-site events. Contact us for more information and make your reservation now!",
        },
    ];

    return (
        <div id='services' className='py-6 sm:mt-7 mt-3 mb-10 flex flex-col items-center'>
            <h1 className='text-center sm:text-3xl text-xl font-semibold text-primary mb-5'>
                Our Services
            </h1>

            {services.map((service, index) => (
                <div key={index} className='mt-2 w-11/12 border-b-slate-400 border-b-2 pb-2 my-2 cursor-pointer' onClick={() => handleToggle(index)}>
                    <div className='flex w-full items-center justify-between gap-6'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl'>
                            {service.title}
                        </h2>
                        <button className='sm:p-3 p-2 bg-blue-300 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-arrow-up-short sm:w-12 sm:h-12 w-8 h-8 ${openIndex === index ? "rotate-180" : "rotate-0"} transition-all duration-150`} viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
                            </svg>
                        </button>
                    </div>
                    <div
                        ref={(el) => (serviceRefs.current[index] = el)}
                        style={{
                            height: openIndex === index ? `${heights[index]}px` : '0',
                            opacity: openIndex === index ? '1' : '0',
                        }}
                        className={`overflow-hidden transition-all duration-300`}
                    >
                        <p className='py-3'>
                            {service.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
