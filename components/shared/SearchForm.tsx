"use client"

import Button from "../ui/Button";
import Input from "../ui/Input";
import { ChangeEvent, useState, useEffect, use } from "react";
import useCollegeStore from "@/store/useCollegeStore";
import { collegeType } from "@/types/collegeTypes";

interface SearchFormProps {
  colleges: collegeType[];
}

const initialState = {
  title: "",
  location: "",
  author: "",
  entrance: "",
  stream: "",
  collegeType: "",
};

const SearchForm = ({colleges} :SearchFormProps) => {

  const [state, setState] = useState(initialState)
  const [value, setValue] = useState('')
  const {setFilteredColleges} = useCollegeStore()

  useEffect(() => {
    function filterAndSetColleges() {
      const filteredColleges = colleges.filter((item) => {
        const titleCondition =
          state.title === "" ||
          item.name
            .toLowerCase()
            .includes(state.title.toLowerCase());
        const locationCondition =
          state.location === "" ||
          item.location
            .toLowerCase()
            .includes(state.location.toLowerCase());
        const entranceCondition =
          state.entrance === "" ||
          item.entrance
            .toLowerCase()
            .includes(state.entrance.toLowerCase());
          const streamCondition =
          state.stream === "" ||
          item.stream
            .toLowerCase()
            .includes(state.stream.toLowerCase());
          const collegeTypeCondition =
          state.collegeType === "" ||
          item.collegeType
            .toLowerCase()
            .includes(state.collegeType.toLowerCase());
          const collegeCondition =
          state.author === "" ||
          item.author
            .toLowerCase()
            .includes(state.author.toLowerCase());
        return (
          titleCondition &&
          locationCondition &&
          collegeCondition &&
          entranceCondition &&
          streamCondition &&
          collegeTypeCondition 

        );
      });

      setFilteredColleges(filteredColleges);
    }

    filterAndSetColleges();
  }, [colleges, state, setFilteredColleges]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
  }
  
  
  return (
    <>
      <div className="bg-gray-50/50 shadow rounded-md p-5 w-full">
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-3">
            <Input
              id="title"
              type="text"
              noLabel
              placeHolder="College Name"
              onChange={onChange}
            />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <Input
              id="location"
              type="text"
              noLabel
              placeHolder="Location"
              onChange={onChange}
            />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <Input
              id="entrance"
              type="text"
              noLabel
              placeHolder="Entrance Exams"
              onChange={onChange}
            />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <Input
              id="stream"
              type="text"
              noLabel
              placeHolder="Streams Available"
              onChange={onChange}
            />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <Input
              id="collegeType"
              type="text"
              noLabel
              placeHolder="Type of College"
              onChange={onChange}
            />
          </div>
          <div className="col-span-12 lg:col-span-12">
            <Button type="submit">Search College</Button>
          </div>
        </div>
      </form>
      
      </div>
    </>
  )
};

export default SearchForm