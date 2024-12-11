import { collegeType } from "@/types/collegeTypes";
import SearchForm from "./SearchForm";

interface HeroProps {
    colleges: collegeType[];
}

const Hero = ({colleges}: HeroProps) => {
  return (
    <div id="home" className=" bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-100 h-screen
    relative w-full bg-cover mt-[-80px]">
        <div className="flex flex-col h-full items-center justify
        -center pt-[200px] gap-20 w-[90%] mx-auto max-w-[1450px]">
            <div className="text-center flex flex-col gap-3">
                <h1 className="text-6xl font-extrabold text-black">
                    Find the{" "}
                    <span className="text-stone-500 font-extrabold">
                        Ideal College
                    </span>
                    , that You Deserve
                </h1>
                <span className="font-bold">
                    A Helping hand to find yourself a better future
                </span>
            </div>
            <SearchForm colleges={colleges} />
        </div>
        
    </div>
  )
}

export default Hero