// import { FaBeer } from "react-icons/fa";
// import Link from "next/link";
import React from "react";
import Button from "@/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-8xl">Operation Relay</h1>
        <FontAwesomeIcon className="text-4xl" icon={faUserNurse} />
        <div className="flex flex-row my-10 gap-10">
        <Button text="Schedule Appointment"></Button>
        <Button text="View Patient Status"></Button>
        </div>
        
      </main>
    </div>
  );
}
