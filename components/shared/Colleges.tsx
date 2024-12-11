"use client"

import { useState } from "react";
import useCollegeStore from "@/store/useCollegeStore";
import CollegeCards from "./CollegeCards";
import Button from "../ui/Button";

const Colleges = () => {
    const { filteredColleges } = useCollegeStore();
    const [visibleColleges, setvisibleColleges] = useState(8);
    const collegesIncrement = 4

    const handleShowMore = () => {
        setvisibleColleges(
            (prev) => prev + collegesIncrement
        )
    }
  return (
    <div id="colleges" className="py-10 w-full">
        <div className="w-full text-center mb-10 text-2xl font-
        extrabold uppercase text-stone-600">
            <h2>Colleges</h2>
        </div>

        {filteredColleges.length < 1 ? (
            <div className="w-full text-center">
                <h1 className="text-2xl">No Colleges Found</h1>
                <span className="text-sm">We are trying our best, please check back later</span>
            </div>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10
            w-[90%] mx-auto max-w-[1400px]">

                {filteredColleges.slice(0, visibleColleges).map
                ((college) => (
                    <CollegeCards key={college.id} college={college}/>
                ))}
            </div>
        )}

        {filteredColleges.length > visibleColleges && (
            <div className="text-center mt-10 text-sm">
                <Button onClick={handleShowMore}>
                    More Colleges
                </Button>
            </div>
        )}
    </div>
  )
}

export default Colleges