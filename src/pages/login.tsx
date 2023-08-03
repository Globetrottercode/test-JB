import LogoSvg from "../components/svg";
import googleIcon from "../icons/google.png";
import Image from "next/image";
import refImg from "../images/image.png";
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
        <div className="flex flex-col justify-around items-center w-full h-4/6 ">
          <div className="flex flex-col justify-evenly h-[32%] w-2/3 ">
            <input
              placeholder="Email/User name"
              className="indent-4 rounded-xl border-2 w-full h-[25%] border-gray-300 focus:border-blue-400 ... "
            />
            <input
              placeholder="Password"
              className="indent-4 rounded-xl border-2 w-full h-[25%] border-gray-300 focus:border-blue-400 ... "
            />
          </div>
          <button className="rounded-xl w-1/3 h-[8%] bg-[#1A2F3D] text-white">
            Log in
          </button>
          <div className="flex h-[5%] w-2/3 ">
            <div className="w-[48%] h-[15%]  mt-3  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
            <p className="mx-2">or</p>
            <div className="w-[48%] h-[15%]  mt-3  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
          </div>
          <button className="flex justify-center items-center rounded-xl w-2/3 h-[8%] bg-[#E2E7E9] border-2 border-gray-400 ">
            <Image
              src={googleIcon}
              width={25}
              height={25}
              alt={"Reference Image"}
              className="object-fit rounded-b-2xl mr-2"
            />{" "}
            Log in with Google
          </button>
          <div className="flex justify-center items-center w-2/4 h-[8%] ">
            <p className="mr-2">Dont have an account ? </p>
            <div className="flex flex-col justify-center  h-[190%]">
              <strong className="mt-7"> SignUp Now </strong>
              <div className=" w-full h-[35%] border-solid border-t-2 border-x-2  border-t-[#4280EF] border-x-[#E2E7E9] rounded-[90%] "></div>
            </div>
          </div>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
/* Vector 1 */
