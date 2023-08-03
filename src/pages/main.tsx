import LogoSvg from "../components/svg";
import Image from "next/image";
import refImg from "../images/image.png";
import TopArrow from "../icons/topArrow";
import SideDesign from "../components/sideDesign";

export default function home() {
  {
    console.log(refImg);
  }
  return (
    <div className="flex min-h-screen  bg-[#E2E7E9]  item-strech justify-evenly ">
      <SideDesign />
      <div className="flex flex-col w-7/12  justify-evenly items-center">
        <div className="flex justify-center items-center w-1/2 h-1/6  ">
          <LogoSvg />
        </div>
        <div className="flex flex-col w-full h-4/6 ">
          <div className="flex justify-around  items-center w-full h-3/6  mt-16">
            <div className="flex flex-col items-center  w-5/12  h-full bg-[#E2E7E9] rounded-2xl overflow-hidden  ">
              <div className="flex justify-center  w-full rounded-t-2xl border-x-2 border-t-2  border-gray-300 ">
                <h1 className="mt-4 mb-4 text-xl">Candidate</h1>
              </div>
              <Image
                src={refImg}
                width={500}
                height={500}
                alt={"Reference Image"}
                className="object-fit rounded-b-2xl"
              />
            </div>
            <div className="flex flex-col items-center  w-5/12  h-full bg-[#E2E7E9] rounded-2xl overflow-hidden  ">
              <div className="flex justify-center  w-full  rounded-t-2xl border-x-2 border-t-2  border-gray-300 ">
                <h1 className="mt-4 mb-4 text-xl">Employer</h1>
              </div>
              <Image
                src={refImg}
                width={500}
                height={500}
                alt={"Reference Image"}
                className="object-fit rounded-b-2xl"
              />
            </div>
          </div>
          <div className="flex justify-around  w-full h-1/6   mt-8">
            <div className=" flex justify-between h-3/5 w-4/12   border-b-2 border-black">
              <h1 className="mb-4 text-xl">Get Started</h1>
              <TopArrow />
            </div>
            <div className=" flex justify-between h-3/5 w-4/12   border-b-2 border-black">
              <h1 className="mb-4 text-xl">Get Started</h1>
              <TopArrow />
            </div>
          </div>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
