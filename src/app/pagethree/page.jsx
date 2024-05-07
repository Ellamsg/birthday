import Link from "next/link";

const Pagethree = () => {
  return (
    <div>
   

      <div className=" h-[100vh] gap-5 flex p-2 flex-col justify-center items-center">
        <div>
          <img className="" src="/images/image3.gif" />
        </div>

        <div className="text-center text-[1.4rem]">
          <p>
            {" "}
            Who said getting older had to be boring?
          </p>
        </div>
        <Link href="/pagefour">
          <button className="bg-white px-3 py-2 font-bold rounded-[12px] text-black">
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagethree;
