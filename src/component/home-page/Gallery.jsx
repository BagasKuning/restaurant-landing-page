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
            <div className=" xl:px-28 md:px-10 sm:px-6 px-3 sm:pt-10 sm:pb-20 pt-6 pb-11">
                <h1 className='text-center sm:text-3xl text-xl font-semibold text-white sm:mb-10 mb-5'>
                    Memories in Frames
                </h1>
                <div className="grid place-items-center grid-cols-12 sm:gap-3 gap-2">
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
