export default function Hero() {
  return (
    <div className="w-full lg:h-screen h-auto sm:py-8 py-14 flex flex-col justify-center px-10">
      <div>
        <div className=" text-primary font-semibold sm:text-7xl text-6xl sm:mb-2 mb-7">
          <h1>CHILL CORNER</h1>
          <h2 className=" opacity-65 sm:text-7xl text-3xl sm:uppercase capitalize sm:mt-0 mt-2">cafe and restaurant</h2>
        </div>
        <p>Come relax and enjoy delicious bites and brews at Chill Corner. Your perfect hangout spot awaits!</p>
      </div>

      <div className="flex md:flex-row flex-col-reverse gap-3 lg:h-auto md:h-[360px] h-[660px] translate-y-20">
        <div className="lg:w-1/4 md:w-2/5 w-full bg-[#202124] text-white p-5">
          <h3 className="text-secondary text-2xl font-medium lg:mb-3 mb-5">
            Best Seller
          </h3>
          <p>
            Combined with protein-rich eggs, fresh lemon and various selected spices. This perfect combination is not only delicious but also nutritious, making it a customer favorite here.
          </p>

          <div className="lg:mt-8 mt-12">
            <p>Price</p>
            <b className=" text-yellow text-4xl font-medium">$12</b>
          </div>
        </div>

        <div className={`flex-1 relative bg-best-seller bg-cover bg-center h-full`}>
          <div className=" absolute right-0 -translate-y-7 -translate-x-16 bg-blue-400 p-10 rounded-full" />
          <div className=" absolute right-0 translate-y-5 -translate-x-2 bg-blue-300 p-7 rounded-full" />
          <div className=" absolute right-0 translate-y-16 translate-x-6 bg-blue-200 p-4 rounded-full" />
        </div>
      </div>
    </div>
  )
}
