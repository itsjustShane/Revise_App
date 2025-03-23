"use client";

import React from "react";
import PhoneInput from "../phone-input/phone-input";
import Button from "../button/button";
import Link from 'next/link';
export default function ScheduleForm() {
    return (
        <div className="p-7 w-2/3 rounded-xl bg-white">
            <p className="text-xl">Name</p>
            <input type="text" className="focus:border-blue-900 w-full px-3 py-2 border border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-2 mb-4" placeholder="John Doe"/>
            <p className="text-xl">Email</p>
            <input type="email" className=" focus:border-blue-900 w-full px-3 py-2 border border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-2 mb-4" placeholder="jdoe@email.com"/>
            <p className="text-xl">Phone</p>
            <PhoneInput/>
            <p className="text-xl">Surgery</p>
            <input type="text" className="focus:border-blue-900 w-full px-3 py-2 border border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-2 mb-4" placeholder="Liposuction"/>
            
            <div className="flex flex-col items-center justify-items-center">
                 <Link href="/procedures">
                    <Button text="Schedule"/>
                 </Link>
                     
            </div>            
        </div>
    );
}