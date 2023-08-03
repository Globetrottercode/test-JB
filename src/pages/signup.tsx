import LogoSvg from "../components/svg";
import googleIcon from "../icons/google.png";
import Image from "next/image";
import FadedLine from "../components/fadedLine";
import RightIcon from "@/icons/rightIcon";
import SideDesign from "../components/sideDesign";

export default function home() {
  return (
    <div className="item-strech flex  min-h-screen  justify-evenly bg-[#E2E7E9] ">
      <SideDesign />

      <div className="flex w-7/12  flex-col  items-center justify-evenly ">
        {/* <div className="flex h-[5%] w-1/2 items-center justify-center bg-green-800">
          <p className="text-3xl">
            <strong>Sign Up</strong>
          </p>
        </div> */}
        <p className="text-3xl">
          <strong>Sign Up</strong>
        </p>
        <div className="flex h-[5%] w-2/3 ">
          <div className="mt-3 h-[10%]  w-[40%]  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
          <p className="text-md mx-2">Basic Details</p>
          <div className="mt-3 h-[10%]  w-[40%]  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
        </div>
        <div className="flex h-[60%] w-full flex-col justify-between items-center   ">
          {/* <div className="flex h-[5%] w-2/3 ">
            <div className="mt-3 h-[15%]  w-[40%]  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
            <p className="mx-2">Basic Details</p>
            <div className="mt-3 h-[15%]  w-[40%]  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
          </div> */}
          <div className="flex justify-between h-[10%] w-2/3 ">
            <input
              placeholder="First name"
              className="indent-4 rounded-xl border-2 w-[53%] h-[98%] border-gray-300 focus:border-blue-400 ... "
            />
            <input
              placeholder="Last name"
              className="indent-4 rounded-xl border-2 w-[43%] h-full border-gray-300 focus:border-blue-400 ... "
            />
          </div>
          <div className="flex justify-between h-[10%] w-2/3 ">
            <input
              placeholder="Email"
              className="indent-4 rounded-xl border-2 w-full h-full border-gray-300 focus:border-blue-400 ... "
            />
          </div>
          <div className="flex justify-between h-[10%] w-2/3 ">
            <input
              placeholder="Password"
              className="indent-4 rounded-xl border-2 w-full h-full border-gray-300 focus:border-blue-400 ... "
            />
          </div>
          <div className="flex justify-between h-[10%] w-2/3">
            <input
              placeholder="Confirm Password"
              className="indent-4 rounded-xl border-2 w-full h-full border-gray-300 focus:border-blue-400 ... "
            />
          </div>
          <div className="flex justify-between h-[10%] w-2/3 ">
            <input
              placeholder="DOB (DD/MM/YYYY)"
              className="indent-4 rounded-xl border-2 w-[53%] h-[98%] border-gray-300 focus:border-blue-400 ... "
            />
            <select
              className=" text-slate-400 pr-6 indent-4 rounded-xl border-2 w-[43%] h-full border-gray-300 focus:border-blue-400 ... "
              name="cars"
              id="cars"
              form="carform"
            >
              <option className="" value="volvo">
                Current City
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>{" "}
          </div>
          <button className="flex justify-center items-center rounded-xl w-1/3 h-[10%]  bg-[#E2E7E9] border-2 border-[#1A2F3D]">
            <p className="mr-2"> Next</p> <RightIcon />
          </button>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
