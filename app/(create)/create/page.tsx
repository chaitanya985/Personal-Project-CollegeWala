import CreateForms from "../components/CreateForms";

const page = () => {
  return (
    <div className="max-w-[1450px] w-[90%] mx-auto">
        <div className="w-full mt-5 text-center">
            <h1 className="md:text-6xl text-4xl font-extrabold
                uppercase mb-1">Add your college
            </h1>
            <span className="w-full text-center">
                Currently 1,0000 students have got their ideal
                colleges, find yours next ! 
            </span>
        </div>

        <CreateForms/>
    </div>
  )
}

export default page