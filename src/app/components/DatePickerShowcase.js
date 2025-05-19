"use client";
import { useState } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DatePickerDropdown from "./date-pickers/DatePickerDropdown";
import DatePickerPopover from "./date-pickers/DatePickerPopover";
import DatePickerInline from "./date-pickers/DatePickerInline";
// import DatePickerRange from "./date-pickers/DatePickerRange";
import DatePickerRange from "@/app/components/date-pickers/DatePickerRange";
import MonthYearPicker from "./date-pickers/MonthYearPicker";

export default function DatePickerShowcase() {
  const [dropdownDate, setDropdownDate] = useState(undefined);
  const [popoverDate, setPopoverDate] = useState(undefined);
  const [inlineDate, setInlineDate] = useState(undefined);
  const [range, setRange] = useState({ from: undefined, to: undefined });

  return (
    <Card className="bg-white border-gray-700 w-full">
      <CardContent className="space-y-6">
        {/* 1. Dropdown DatePicker */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Bộ chọn ngày dạng Dropdown
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Chọn ngày, tháng và năm từ các menu thả xuống.
          </p>
          <DatePickerDropdown
            defaultDate={new Date()}
            onDateChange={(date) => setDropdownDate(date)}
          />
          <p className="mt-2 text-gray-500">
            Ngày đã chọn:{" "}
            {dropdownDate
              ? format(dropdownDate, "dd/MM/yyyy", { locale: vi })
              : "Chưa chọn"}
          </p>
        </div>

        {/* 2. Popover DatePicker */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Bộ chọn ngày dạng Popover
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Chọn ngày từ lịch trong một cửa sổ bật lên.
          </p>
          <DatePickerPopover
            defaultDate={new Date()}
            onDateChange={(date) => setPopoverDate(date)}
            className="w-full"
          />
          <p className="mt-2 text-gray-500">
            Ngày đã chọn:{" "}
            {popoverDate
              ? format(popoverDate, "dd/MM/yyyy", { locale: vi })
              : "Chưa chọn"}
          </p>
        </div>

        {/* 3. Inline DatePicker */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Bộ chọn ngày dạng Inline
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Lịch cố định để chọn ngày trực tiếp.
          </p>
          <DatePickerInline
            defaultDate={new Date()}
            onDateChange={(date) => setInlineDate(date)}
          />
          <p className="mt-2 text-gray-500">
            Ngày đã chọn:{" "}
            {inlineDate
              ? format(inlineDate, "dd/MM/yyyy", { locale: vi })
              : "Chưa chọn"}
          </p>
        </div>

        {/* 4. Range DatePicker */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Bộ chọn khoảng ngày
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Chọn một khoảng ngày từ lịch.
          </p>
          <DatePickerRange
            defaultRange={{ from: new Date(), to: undefined }}
            onRangeChange={(range) => setRange(range)}
          />
          <p className="mt-2 text-gray-500">
            Khoảng ngày:{" "}
            {range.from
              ? format(range.from, "dd/MM/yyyy", { locale: vi })
              : "Chưa chọn"}{" "}
            -{" "}
            {range.to
              ? format(range.to, "dd/MM/yyyy", { locale: vi })
              : "Chưa chọn"}
          </p>
        </div>

        {/* 5. Universal DatePicker */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Bộ chọn ngày đa năng
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Chọn ngày, tháng hoặc năm từ lịch.
          </p>
          <MonthYearPicker
            onChange={(value) => console.log("Đã chọn:", value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-blue-500">
          <a
            href="https://ui.shadcn.com/docs/components/date-picker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xem tài liệu
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
