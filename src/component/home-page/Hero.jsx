export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-10 gap-8">
      <div>
        <div className=" text-primary font-semibold text-7xl mb-2">
            <h1>CHILL CORNER</h1>
            <h2>CAFE AND RESTO</h2>
        </div>
          <p>Come relax and enjoy delicious bites and brews at Chill Corner. Your perfect hangout spot awaits!</p>
      </div>

      <div className=" flex gap-3">
        <div className="w-1/5 bg-[#202124] text-white p-5">
          <h3 className="text-secondary text-2xl font-medium mb-3">
            Best Seller
          </h3>
          <p>Lorem ipsum Excepturi, accusamus. Sunt, repudiandae inventore obcaecati saepe natus ad necessitatibus accusamus enim voluptatem, neque officiis laborum?</p>

          <div className="mt-6">
            <p>Price</p>
            <b className="text-[#FFF56D] text-4xl font-medium">$12</b>
          </div>
        </div>

        <div className={`flex-1 bg-best-seller bg-cover bg-center h-full`}/>
      </div>
    </div>
  )
}
