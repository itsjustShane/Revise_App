"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image alt="Two hands holding up a medical heart symbol with Operation Relay Written underneath them" 
        src="/images/Operation_Relay_Logo.png" width={500} height={500} className="rounded-4xl"/>
        <div className="flex flex-row my-10 gap-10">
          <Link href="/appointment">
            <Button text="Schedule Appointment" ></Button>
          </Link>
          
        <Button text="View Patient Status"></Button>
        </div>
        
      </main>
    </div>
  );
}
