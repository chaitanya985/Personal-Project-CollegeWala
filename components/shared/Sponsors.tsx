import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1450px] w-[90%] mx-auto">
        <div className="w-full text-center">
          <h2 className="text-3xl">
            More Than{" "}
            <span className="text-stone-600 font-bold">
              5,000 Colleges
            </span>{" "}
            Trust us and we are growing more
          </h2>
        </div>

        <div className="flex justify-between items-center mt-5 flex-wrap gap-10">
          <Image
            src={"/logo1.jpg"}
            alt="logo1"
            width={144}
            height={144}
          />
          <Image
            src={"/logo2.png"}
            alt="logo2"
            width={144}
            height={144}
          />
          <Image
            src={"/logo3.png"}
            alt="logo3"
            width={144}
            height={144}
          />
          <Image
            src={"/logo4.jpg"}
            alt="logo4"
            width={144}
            height={144}
          />
          <Image
            src={"/logo5.png"}
            alt="logo5"
            width={144}
            height={144}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;