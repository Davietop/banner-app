"use client"
import { useState } from "react";
import EditModal from "@/components/editModal";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    bgImage: "/fitImage.jpg",
    bgColor: "#161d27",
    diningImage: "/dinning.jpg",
    bedImage: "/bed.jpg",
    livingImage: "/living.jpg",
    diningLabel: "DINING ROOM",
    bedLabel: "BED ROOM",
    livingLabel: "LIVING ROOM",
    heading1: "Find a Perfect",
    heading2: "Home",
    heading3: "For your Family",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et.",
    cta: "Book Now",
    phone: "(123) 456-7890",
    price: "$1,500.00",
    spec1: "3 Bed Rooms",
    spec2: "1 Living Room",
    spec3: "Swimming Pool",
    spec4: "Guest House",
  });

  console.log(data.bgColor)

  return (
    <div style={{ backgroundColor: data.bgColor, height: "100vh" }}>
  
      <div  onClick={() => setModalOpen(true)} className="absolute top-6 right-[250px] bg-[#ffd207] text-black px-4 py-1 rounded-full text-sm shadow font-bold">
      Edit Banner
      </div>

      <EditModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(newData) => setData(newData)}
        initialData={data}
      />

      <div
        className="root h-[670px] text-black w-[850px]"
        style={{
          backgroundImage: `url(${data.bgImage})`,
          backgroundColor: data.bgColor,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col absolute top-[100px] left-[650px] z-10">
        <div
          className="h-[170px] w-[200px] rotate-[20deg] relative bg-cover bg-no-repeat border-[3px] border-solid border-white shadow-lg"
          style={{ backgroundImage: `url(${data.diningImage})` }}
        >
          <span className="absolute bottom-2 left-2 bg-yellow-400 px-3 py-1 text-xs font-bold rounded-lg">
            {data.diningLabel}
          </span>
        </div>
        <div
          className="h-[170px] w-[200px] rotate-[-7deg] relative top-[-20px] left-[-100px] bg-cover bg-no-repeat border-[3px] border-solid border-white shadow-lg"
          style={{ backgroundImage: `url(${data.bedImage})` }}
        >
          <span className="absolute bottom-2 left-2 bg-yellow-400 px-3 py-1 text-xs font-bold rounded-lg">
            {data.bedLabel}
          </span>
        </div>
        <div
          className="h-[170px] w-[200px] relative left-[-190px] top-[-20px] rotate-[5deg] bg-cover bg-no-repeat border-[3px] border-solid border-white shadow-lg"
          style={{ backgroundImage: `url(${data.livingImage})` }}
        >
          <span className="absolute bottom-2 left-2 bg-yellow-400 px-3 py-1 text-xs font-bold rounded-lg">
            {data.livingLabel}
          </span>
        </div>
      </div>

      <div
        className={`${inter.className} ml-[90px] relative top-[-120px] leading-[22px] tracking-wide text-lg`}
      >
        <ul className="space-y-2 text-white">
          <li className="flex items-center gap-2">
            <span className="mt-1 h-2 w-2 bg-yellow-400 rounded-full"></span>{data.spec1}
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-1 h-2 w-2 bg-yellow-400 rounded-full"></span>{data.spec2}
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-1 h-2 w-2 bg-yellow-400 rounded-full"></span>
            {data.spec3}
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-1 h-2 w-2 bg-yellow-400 rounded-full"></span>
            {data.spec4}
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ml-[400px]">
      <div>
  {/* Heading 1 - each word in its own <p> */}
  <h1 className="flex  items-start gap-1 flex-row text-3xl leading-[30px] tracking-[3px] font-bold">
    {data.heading1.split(" ").map((word, index) => (
      <p key={index}>{word}</p>
    ))}
  </h1>

  {/* Heading 2 - plain */}
  <h1 className="font-bold text-8xl text-[#ffd207] leading-[70px]">
    {data.heading2}
  </h1>

  {/* Heading 3 - first word in one <p>, rest in another */}
  <h1 className="w-full flex flex-row items-center leading-[60px] tracking-[6px] text-4xl gap-1 font-bold">
    <p>{data.heading3.split(" ")[0]}</p>
    <p className="ml-1">
      {data.heading3.split(" ").slice(1).join(" ")}
    </p>
  </h1>
</div>


        <h1 className="w-full mt-10 text-center">{data.description}</h1>

        <button className="mt-6 mx-auto bg-[#ffd207] text-center text-black font-[500] rounded-full w-9/12 p-1.5">
          {data.cta}
        </button>
      </div>

      <div className="absolute top-6 right-6 bg-[#ffd207] text-black px-4 py-1 rounded-full text-sm shadow font-bold">
        Call at 📞 {data.phone}
      </div>

      <div className={`${inter.className}`}>
        <div className="absolute right-0 bottom-0 h-[250px] w-3/12">
          <div className="root2 relative h-[250px] w-full text-white">
            <p className="absolute text-3xl z-10 bottom-4 right-20 text-[#ffd207] font-bold">
              {data.price}
            </p>
            <p className="absolute z-10 bottom-16 right-20 text-lg">Price Started At</p>
          </div>
        </div>
      </div>
    </div>
  );
}
