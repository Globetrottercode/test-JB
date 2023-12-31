function TopArrow() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 -rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>
    </div>
  );
}
export default TopArrow;
