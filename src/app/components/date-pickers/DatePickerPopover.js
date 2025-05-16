"use client";
import { useState } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerPopover({ onDateChange, defaultDate }) {
  const [date, setDate] = useState(defaultDate);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    onDateChange?.(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] px-4 py-2 rounded-2xl shadow-sm border border-gray-300 bg-white hover:bg-gray-100 transition-colors",
            "text-sm font-medium text-gray-700 flex items-center gap-2",
            !date && "text-gray-400"
          )}
        >
          <CalendarIcon className="h-4 w-4 text-gray-500" />
          {date ? format(date, "dd/MM/yyyy", { locale: vi }) : <span>Chọn ngày</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 rounded-xl shadow-lg border border-gray-200 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          locale={vi}
        //   captionLayout="dropdown-buttons"
          fromYear={1900}
          toYear={2025}
          className="rounded-xl"
        />
      </PopoverContent>
    </Popover>
  );
}
