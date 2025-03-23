import React from "react";
import ScheduleForm from "@/components/schedule-form/schedule-form";

export default function Appointment() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] items-center justify-items-center pt-9 ">
            <h1 className="text-8xl mt-20 mb-12">Schedule</h1>
            <ScheduleForm/>
        </div>
    );
}