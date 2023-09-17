"use client"
import { UserAuth } from "@/lib/authContext";
import Link from "next/link";

export default function Home() {
  const {user} = UserAuth()
  return (
    <main className=' flex flex-col justify-center items-center p-24'>
      <h1 className=" text-5xl text-center font-bold pt-24 pb-5">Vrukshaa - Your plant protector🔥</h1>
        <p className=" text-xl font-thin text-center pb-12">Diagnose your plant's diseases remotely at your fingertips verified by authorised experts</p>
        <Link href={user?'/home':'/auth'} className=" bg-green-500 rounded-lg p-5 text-3xl font-bold">Get started</Link>
    </main>
  )
}
