"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const getYears = (from = 1990, to = 2100) => {
  const years = [];
  for (let y = from; y <= to; y++) years.push(y);
  return years;
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export default function MonthYearPicker({ onChange }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("month");
  const [showDialog, setShowDialog] = useState(false);

  const months = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
    "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
    "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ];

  const years = getYears(2000, 2035);

  const maxValidDay = selectedYear !== null && selectedMonth !== null
    ? getDaysInMonth(selectedYear, selectedMonth)
    : 31;

  const isInvalidDay =
    selectedDay !== null &&
    selectedMonth !== null &&
    selectedYear !== null &&
    selectedDay > maxValidDay;

const handleSelect = (value) => {
  let newMonth = selectedMonth;
  let newYear = selectedYear;

  if (tab === "month") {
    newMonth = value;
    setSelectedMonth(value);
  } else {
    newYear = value;
    setSelectedYear(value);
  }

  setOpen(false);
  if (
    selectedDay !== null &&
    newMonth !== null &&
    newYear !== null &&
    selectedDay > getDaysInMonth(newYear, newMonth)
  ) {
    setShowDialog(true);
  } else if (
    selectedDay !== null &&
    newMonth !== null &&
    newYear !== null
  ) {
    onChange && onChange({ year: newYear, month: newMonth, day: selectedDay });
  }
};


  const handleDaySelect = (value) => {
    const day = parseInt(value);
    setSelectedDay(day);
    if (
      selectedYear !== null &&
      selectedMonth !== null &&
      day <= getDaysInMonth(selectedYear, selectedMonth)
    ) {
      onChange && onChange({ year: selectedYear, month: selectedMonth, day });
    }
  };

  return (
    <div className="space-y-4">
      <div className="w-full">
        <Select value={selectedDay?.toString() || ""} onValueChange={handleDaySelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Chọn ngày" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <SelectItem key={d} value={d.toString()}>
                Ngày {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="month">Chọn tháng</TabsTrigger>
          <TabsTrigger className="w-full" value="year">Chọn năm</TabsTrigger>
        </TabsList>

        <TabsContent value="month">
          <Popover open={tab === "month" && open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {selectedMonth !== null ? months[selectedMonth] : "Chọn tháng"}
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="grid grid-cols-3 gap-2 w-60 p-2 max-h-64 overflow-y-auto">
              {months.map((m, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  onClick={() => handleSelect(i)}
                  className={selectedMonth === i ? "bg-blue-100" : ""}
                >
                  {m}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
        </TabsContent>

        <TabsContent value="year">
          <Popover open={tab === "year" && open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {selectedYear || "Chọn năm"}
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="grid grid-cols-3 gap-2 w-60 p-2 max-h-64 overflow-y-auto">
              {years.map((y) => (
                <Button
                  key={y}
                  variant="ghost"
                  onClick={() => handleSelect(y)}
                  className={selectedYear === y ? "bg-blue-100" : ""}
                >
                  {y}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
        </TabsContent>
      </Tabs>

      {(selectedMonth !== null || selectedYear !== null || selectedDay !== null) && (
        <div className="text-sm text-gray-700 border rounded p-3 bg-gray-50 space-y-1">
          <p>
            <strong>Thời gian đã chọn:</strong>{" "}
            {selectedDay ? `Ngày ${selectedDay}, ` : ""}
            {selectedMonth !== null ? months[selectedMonth] : "--"}{" "}
            {selectedYear !== null ? selectedYear : ""}
          </p>
          {selectedYear !== null && (
            <p>
              Năm {selectedYear} là{" "}
              {isLeapYear(selectedYear) ? "năm nhuận" : "năm không nhuận"}
            </p>
          )}
          {selectedMonth !== null && selectedYear !== null && (
            <p>
              Tháng {selectedMonth + 1} có {maxValidDay} ngày
            </p>
          )}
        </div>
      )}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ngày không hợp lệ</DialogTitle>
            <DialogDescription>
              Tháng {selectedMonth + 1} năm {selectedYear} chỉ có {maxValidDay} ngày. Vui lòng chọn lại ngày phù hợp.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
