import { create } from "zustand";
import { collegeType } from "@/types/collegeTypes";

interface CollegeStoreState {
    filteredColleges: collegeType[];
    setFilteredColleges: (colleges: collegeType[]) => void;
}

const useCollegeStore = create<CollegeStoreState>((set)=>({
    filteredColleges: [],
    setFilteredColleges: (colleges) => set({ filteredColleges: colleges}),
}))

export default useCollegeStore