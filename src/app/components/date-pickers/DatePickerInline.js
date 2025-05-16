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
    <div className="block rounded-2xl border border-gray-200 shadow-md bg-white p-4 max-w-[300px] mx-auto">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        locale={vi}
        captionLayout="dropdown-buttons"
        fromYear={1900}
        toYear={2025}
        className="rounded-xl border-0"
        classNames={{
          months: "flex flex-col space-y-4",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center mb-2",
          caption_label: "hidden",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-full",
          nav_button_previous: "absolute left-[-1rem]", 
          nav_button_next: "absolute right-[-1rem]", 
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center",
          row: "flex w-full mt-2",
          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-gray-100",
          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_hidden: "invisible",
          caption_dropdowns: "flex space-x-2 justify-center",
          dropdown: "border border-gray-300 rounded-md px-2 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          dropdown_month: "relative",
          dropdown_year: "relative",
        }}
      />
    </div>
  );
}