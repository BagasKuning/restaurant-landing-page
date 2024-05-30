import gallery1 from '../../img/gallery1.jpg'
import gallery2 from '../../img/gallery2.jpg'
import gallery3 from '../../img/gallery3.jpg'
import gallery4 from '../../img/gallery4.jpg'
import gallery5 from '../../img/gallery5.jpg'
import gallery6 from '../../img/gallery6.jpg'
import gallery7 from '../../img/gallery7.jpg'

export default function Gallery() {
    
    return (
        <div className="mt-6 bg-gradient-to-bl from-[#29779bc9] to-[#08374dc9]">
                <h1 className='bg-white text-primary px-3 whitespace-nowrap absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:text-4xl text-2xl font-semibold sm:mb-10 mb-5'>
                    Memories in Frames
                </h1>
            <div className=" xl:px-28 md:px-10 sm:px-6 px-3 sm:py-20 py-11">
                <div className="grid place-items-center grid-cols-12 sm:gap-3 gap-2 sm:h-auto h-[500px]">
                    <img
                        src={gallery1}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-5 row-span-3"
                    />
                    <img
                        src={gallery2}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-3"
                    />
                    <img
                        src={gallery3}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-4"
                    />
                    <img
                        src={gallery4}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-4"
                    />
                    <img
                        src={gallery5}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-3"
                    />
                    <img
                        src={gallery6}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-3"
                    />
                    <img
                        src={gallery7}
                        alt={``}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-md col-span-4"
                    />
                </div>

            </div>
        </div>
    );
}
