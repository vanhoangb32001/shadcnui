"use client";
import { useState } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerRange({ onRangeChange, defaultRange }) {
  const [range, setRange] = useState(defaultRange || { from: undefined, to: undefined });

  const handleSelect = (selectedRange) => {
    setRange(selectedRange || { from: undefined, to: undefined });
    onRangeChange && onRangeChange(selectedRange || { from: undefined, to: undefined });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !range.from && !range.to && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {range.from ? (
            range.to ? (
              <>
                {format(range.from, "dd/MM/yyyy", { locale: vi })} -{" "}
                {format(range.to, "dd/MM/yyyy", { locale: vi })}
              </>
            ) : (
              format(range.from, "dd/MM/yyyy", { locale: vi })
            )
          ) : (
            <span>Chọn khoảng ngày</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="range"
          selected={range}
          onSelect={handleSelect}
          initialFocus
          locale={vi}
          numberOfMonths={2}
          fromYear={1900}
          toYear={2025}
        />
      </PopoverContent>
    </Popover>
  );
}