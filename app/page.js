"use client"
import { UserAuth } from "@/lib/authContext";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home() {
  const { user } = UserAuth()
  return (
    <main id="home" className=' flex flex-col justify-center items-center py-48 px-6  md:h-full md:px-24 md:py-24'>
      <motion.h1 initial={"hidden"} whileInView="visible" transition={{ duration: 1.0, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }} className=" text-3xl md:text-5xl text-center font-bold pt-16 pb-5">Welcome to Vrukshaa - Your Go-To Plant Health Expert!</motion.h1>
      <motion.p initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }} className=" text-xl font-medium text-center pb-12">Snap a picture of your plant, and we&apos;ll reveal its hidden ailments. Know the disease, treat with ease</motion.p>
      <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={user ? '/home' : '/auth'} className=" bg-green-500 rounded-lg p-5 text-xl md:text-3xl font-bold">Get started</Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
