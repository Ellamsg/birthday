import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <div className="">
        <div className="p-2 h-[100vh] gap-5 flex flex-col justify-center items-center">
          <div>
            <img src="/images/image8.gif" />
          </div>

          <div className="text-center text-[1.4rem]">
            <p>
              {" "}
              Isn't it funny how birthdays have this way of making us reflect on life and all the moments that led us to where we are today?
            </p>
          </div>
          <Link href="/pagetwo">

          <button className="bg-white px-3 py-2 font-bold rounded-[12px] text-black">NEXT</button>
          </Link>
        
        </div>
      </div>
    </main>
  );
}
