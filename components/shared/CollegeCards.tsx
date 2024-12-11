"use client"

import Link from "next/link";
import { collegeType } from "@/types/collegeTypes";
import Image from "next/image";


interface CollegeCardsProps{
    college: collegeType
}

const CollegeCards = ({college}: CollegeCardsProps) => {
  return (
    <Link href={`/college/${college.id}`}>
        <div className="border p-3 rounded-md flex flex-col h-56 w-72
        hover:bg-stone-600 transition duration-700 hover:text-white">
            <div className="flex justify-between">
                <div>
                    <Image 
                    src={college.img}
                    height={40}
                    width={40}
                    alt={`${college.author} logo`}/>
                </div>
                <h2>{college.entrance}</h2>
            </div>
            <div className="mt-3 text-xl flex-1">
                <h3 className="font-semibold truncate">{college.name}</h3>
                <p className="text-base truncate">{college.location}</p>
                <span className="text-base">
                    {college.collegeType}
                </span>
            </div>
            <div className="text-xl mt-auto">
                <span className="bg-stone-600 text-xs
                    px-3 rounded-md text-white">
                    {college.stream}
                </span>
            </div>
        </div>
    </Link>
  )
}

export default CollegeCards