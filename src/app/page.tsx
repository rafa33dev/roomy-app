'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" p-4 flex  h-[550px] max-h-screen justify-center items-center">
      <div className="container w-2/4 text-center relative bottom-20">
        <h2 className="font-bold text-[3rem] ">
          Imagine <span>and</span> create
        </h2>
        <h3 className=""> your story!</h3>
      </div>
      <div className="container flex justify-end relative">
        <Image
          className="absolute  w-auto h-auto right-[365px]"
          alt="image home"
          src={"/imageHome.jfif"}
          width={350}
          height={500}
          priority={true}
        />
        <div className="container w-2/4  flex flex-col h-[300px] justify-center items-center border-2 rounded-lg ">
          <h2 className="font-bold text-[2rem] ">
            Inicia sesion ahora mismo!.
          </h2>
          <Link href={"/login"}>Sign in</Link>
        </div>
      </div>
     
    </main>
  )
}
