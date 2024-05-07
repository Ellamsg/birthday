import Link from "next/link";

const Pagetwo = () => {
    return ( <div>
        <div>

 
        <div className="">
        <div className="p-2 h-[100vh] gap-5 flex flex-col justify-center items-center">
          <div>
            <img src="/images/image4.gif" />
          </div>

          <div className="text-center text-[1.4rem]">
            <p>
              {" "}
              Birthdays are a time for reflection, celebration, and gratitude, and today, as we celebrate your special day, I can't help but feel overwhelmed with joy
            </p>
          </div>
          <Link href="/pagethree">

          <button className="bg-white px-3 py-2 font-bold rounded-[12px] text-black">NEXT</button>
          </Link>
        
        </div>
      </div>
        </div>
    </div> );
}
 
export default Pagetwo;