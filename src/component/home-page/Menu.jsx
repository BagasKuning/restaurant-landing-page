export default function Menu() {
    return (
        <div id="menu" className="pt-14 pb-20 mb-10 bg-gradient-to-bl from-[#29779bc9] to-[#08374dc9] text-white">
            <div className=" xl:px-28 md:px-10 sm:px-6 px-3 flex gap-8">
                <div className="flex-1">
                    <div className="mb-14">
                        <h1 className='sm:text-6xl text-5xl font-semibold mb-3'>
                            Choose
                            <br /> Your Menu
                        </h1>
                        <p className='opacity-85 sm:text-base text-sm'>Come see some of the delicious food and drinks we offer. <b className=' tracking-widest'>Click</b> to explore our full menu and find your next favorite meal!</p>
                    </div>


                    <p className='text-xl text-right font-serif tracking-widest mb-3'>
                        DRINKS
                    </p>
                    <a href="">
                        <div className='lg:h-[550px] sm:h-[440px] h-[180px] w-full bg-drink bg-cover bg-center'/>
                    </a>
                    <div className='flex justify-between mt-3 gap-3'>
                        <span className='text-yellow sm:text-4xl text-3xl'>
                            $3
                        </span>
                        <p className='text-right w-3/4 sm:text-base text-sm'>
                            The combination of bubbly soda and fresh lemon creates a refreshing and uplifting drink.
                        </p>
                    </div>

                </div>


                <div className="flex-1 flex justify-center flex-col">
                    <p className='text-xl text-right font-serif tracking-widest mb-3'>
                        FOODS
                    </p>
                    <a href="">
                        <div href="drink-menu.jpg" className='lg:h-[550px] sm:h-[440px] h-[180px] w-full bg-food bg-cover bg-center'/>
                    </a>
                    <div className='flex justify-between mt-3 gap-3'>
                        <span className='text-yellow sm:text-4xl text-3xl'>
                            $14
                        </span>
                        <p className='text-right w-3/4 sm:text-base text-sm'>
                            A special dish that combines fresh salmon fillet with tender spinach and a rich cream sauce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
