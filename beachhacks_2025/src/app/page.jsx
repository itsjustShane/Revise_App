"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-8xl">Operation Relay</h1>
        <FontAwesomeIcon icon={faUserNurse} className="w-30 h-30" />
        
        <div className="flex flex-row my-10 gap-10">
          <Button text="Schedule Appointment" />
          <Link href="/procedures">
            <Button text="View Procedure" />
          </Link> 
        </div>
      </main>
    </div>
  );
}
