"use client"
import { UserAuth } from "@/lib/authContext";
import Link from "next/link";

export default function Home() {
  const {user} = UserAuth()
  return (
    <main id="home" className=' flex flex-col justify-center items-center py-48 px-6  md:h-full md:px-24 md:py-24'>
      <h1 className=" text-3xl md:text-5xl text-center font-bold pt-16 pb-5">Welcome to Vrukshaa - Your Go-To Plant Health Expert!</h1>
        <p className=" text-xl font-medium text-center pb-12">Snap a picture of your plant, and we&apos;ll reveal its hidden ailments. Know the disease, treat with ease</p>
        <Link href={user?'/home':'/auth'} className=" bg-green-500 rounded-lg p-5 text-xl md:text-3xl font-bold">Get started</Link>
    </main>
  )
}
