import { useState } from 'react';

export default function Service() {
    const [openIndex, setOpenIndex] = useState(null);

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

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='py-6 mt-6 flex flex-col items-center'>
            <h1 className='text-center text-3xl font-semibold text-primary mb-4'>Our Service</h1>

            {services.map((service, index) => (
                <div key={index} className='mt-2 w-11/12 border-b-slate-400 border-b-2 pb-1 my-2'>
                    <div className='inline-flex w-full items-center justify-between'>
                        <h2 className='text-4xl'>{service.title}</h2>
                        <button className='p-4 bg-blue-300 rounded-full relative' onClick={() => handleToggle(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-arrow-up-short w-12 h-12 ${openIndex === index ? "rotate-180" : "rotate-0"}`} viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
                            </svg>
                        </button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                        <p className='py-3'>
                            {service.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
