export default function Navbar() {
    return (
        <div className='w-full flex justify-between py-4 lg:px-16 px-6 sm:bg-none bg-gradient-to-b from-[#daebe9] to-[#ffffff25]'>
            <div className='relative'>
                <span className='text-5xl text-[#2e7b85] font-medium font-serif absolute left-0 top-1/2 -translate-y-1/2'>
                    C
                </span>
                <span className='text-xl text-[#0D9276] font-semibold font-rubik absolute left-0 top-1/2 -translate-y-1/2 translate-x-3/4'>
                    C
                </span>
            </div>

            <ul className='flex gap-7 items-center'>
                    <li className="sm:block hidden">
                        <a href="#services">Our Services</a>
                    </li>
                    <li className="sm:block hidden">
                        <a href="#menu">Menu</a>
                    </li>
                <li className='py-1 px-4 border-2 border-[#38bea1] text-[#38bea1] rounded-[4px] cursor-pointer'>
                    <a href="https://wa.me/+62 858-3424-4858?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20Anda">
                            WhatsApp Now
                    </a>
                </li>
            </ul>
        </div>
    )
}
