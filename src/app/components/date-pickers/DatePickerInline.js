"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui";
import { vi } from "date-fns/locale";

export default function DatePickerInline({ onDateChange, defaultDate }) {
  const [date, setDate] = useState(defaultDate);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    onDateChange && onDateChange(selectedDate);
  };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        locale={vi}
        captionLayout="dropdown-buttons"
        fromYear={1900}
        toYear={2025}
        className="border-none"
      />
    </div>
  );
}