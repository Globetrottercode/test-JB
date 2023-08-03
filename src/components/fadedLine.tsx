export default function FadedLine(props: { text: string }) {
  return (
    <div className="flex h-[5%] w-2/3 ">
      <div className="mt-3 h-[15%]  w-[48%]  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
      <p className="mx-2">{props.text}</p>
      <div className="mt-3 h-[15%]  w-[48%]  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
    </div>
  );
}
