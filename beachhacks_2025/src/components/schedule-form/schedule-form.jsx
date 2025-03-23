"use client";
import React, { useState } from "react";
import PhoneInput from "../phone-input/phone-input";
import Button from "../button/button";
import Link from 'next/link';
export default function ScheduleForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        surgery: "",
        appointment_date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Server Response:", data); // Debugging
        alert(data.message);
    };
    return (
        <div className="p-7 w-1/2 rounded-xl bg-white">
            <form onSubmit={handleSubmit}>
                <p className="text-xl ml-28">Name (First Last)</p>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="focus:border-blue-900 w-3/4 px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring-2 ml-28 mb-4" placeholder="John Doe"/>
                <p className="text-xl ml-28">Email</p>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className=" focus:border-blue-900 w-3/4 px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring-2 mb-4 ml-28" placeholder="jdoe@email.com"/>
                <p className="text-xl ml-28">Phone</p>
                <PhoneInput name="phone" value={formData.phone} onChange={handleChange}/>
                <p className="text-xl ml-28">Surgery</p>
                <input type="text" name="surgery" required value={formData.surgery} onChange={handleChange} className="focus:border-blue-900 w-3/4 px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring-2 mb-4 ml-28" placeholder="Liposuction"/>
                <p className="text-xl ml-28">Appointment Date</p>
                <input type="date" name="appointment_date" required value={formData.appointment_date} onChange={handleChange} className="focus:border-blue-900 w-1/4 px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring-2 mb-4 ml-28"/>
            
                <div className="flex flex-col items-center justify-items-center">
                    <Button text="Schedule" type="submit"/> 
                </div>            
            </form>
        </div>
    );
}