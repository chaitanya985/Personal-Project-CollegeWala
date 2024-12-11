const About = () => {
  return (
    <div className="py-16 bg-gray-50/50 mt-10" id="about">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <h2 className="w-full text-center mb-10 text-2xl font-extrabold uppercase text-stone-600">
          About Us
        </h2>

        <div className="mt-5 w-full flex flex-col justify-center items-center">
          <p className="leading-loose text-center">
          At College Finder, we are dedicated to helping students discover 
          their ideal educational paths. Our platform provides comprehensive
          resources and personalized guidance to navigate the college 
          selection process. We believe that every student deserves access 
          to the information and support they need to make informed decisions
          about their future. Join us in exploring the opportunities that await you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;