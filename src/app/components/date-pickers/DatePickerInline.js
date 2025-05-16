"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { vi } from "date-fns/locale";

export default function DatePickerInline({ onDateChange, defaultDate }) {
  const [date, setDate] = useState(defaultDate);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    onDateChange?.(selectedDate);
  };

  return (
    <div className="inline-block rounded-2xl border border-gray-200 shadow-md bg-white p-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        locale={vi}
        captionLayout="dropdown-buttons"
        fromYear={1900}
        toYear={2025}
        className="rounded-xl"
      />
    </div>
  );
}
