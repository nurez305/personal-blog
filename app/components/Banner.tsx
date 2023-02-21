

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Nurez Daily's Blog</h1>
            <h2 className="mt-5 md:mt-0 ">
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">Every Developers</span>{" "}
                Favourite blog in the whole world
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Want to learn about coding? | best way to structure your code | land your dream job very fast & more ...
        </p>

    </div>
  )
}

export default Banner