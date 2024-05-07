import Link from "next/link";

const Pagefour = () => {
  return (
    <div>
      <div></div>

      <div className=" h-[100vh] gap-5 flex p-2 flex-col justify-center items-center">
        <div>
          <img className="" src="/images/image6.gif" />
        </div>

        <div className="text-center text-[1.4rem]">
          <p>
            {" "}
            Today marks the day you entered the world, and it's a better place for it
          </p>
        </div>
        <Link href="/pagefive">
          <button className="bg-white px-3 py-2 font-bold rounded-[12px] text-black">
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagefour;
