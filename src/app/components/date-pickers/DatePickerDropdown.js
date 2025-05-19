"use client";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DatePickerDropdown({ onDateChange, defaultDate }) {
  const [day, setDay] = useState(defaultDate ? defaultDate.getDate().toString() : undefined);
  const [month, setMonth] = useState(defaultDate ? (defaultDate.getMonth() + 1).toString() : undefined);
  const [year, setYear] = useState(defaultDate ? defaultDate.getFullYear().toString() : undefined);
  const [lastSelectedDate, setLastSelectedDate] = useState(null);

  // Tính số ngày hợp lệ trong tháng
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Tạo danh sách ngày dựa vào tháng và năm hiện tại
  const days = (() => {
    if (month && year) {
      const numDays = getDaysInMonth(parseInt(month), parseInt(year));
      return Array.from({ length: numDays }, (_, i) => (i + 1).toString());
    }
    return Array.from({ length: 31 }, (_, i) => (i + 1).toString()); // fallback
  })();

  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 2025 - 1900 + 1 }, (_, i) => (1900 + i).toString());

  // Reset ngày nếu giá trị không còn hợp lệ sau khi đổi tháng/năm
  useEffect(() => {
    if (day && month && year) {
      const maxDay = getDaysInMonth(parseInt(month), parseInt(year));
      if (parseInt(day) > maxDay) {
        setDay(undefined);
      }
    }
  }, [month, year]);

  useEffect(() => {
    if (day && month && year) {
      const selectedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      if (selectedDate.getTime() && selectedDate.getTime() !== lastSelectedDate?.getTime()) {
        onDateChange?.(selectedDate);
        setLastSelectedDate(selectedDate);
      }
    } else if (lastSelectedDate !== null) {
      onDateChange?.(undefined);
      setLastSelectedDate(null);
    }
  }, [day, month, year]);

  return (
    <div className="flex w-auto gap-10">
      <Select value={day} onValueChange={setDay}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Ngày" />
        </SelectTrigger>
        <SelectContent>
          {days.map((d) => (
            <SelectItem key={d} value={d}>
              {d}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={month} onValueChange={setMonth}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Tháng" />
        </SelectTrigger>
        <SelectContent>
          {months.map((m) => (
            <SelectItem key={m} value={m}>
              Tháng {m}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={year} onValueChange={setYear}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Năm" />
        </SelectTrigger>
        <SelectContent>
          {years.map((y) => (
            <SelectItem key={y} value={y}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
