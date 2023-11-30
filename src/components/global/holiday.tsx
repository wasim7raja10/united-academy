"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { holidayList } from "@/shared/data/dummy/holidayList";

export const Holiday = () => {
  return (
    <Table>
      <TableHeader className="sm:text-xl text-base text-gray-800">
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead>Date</TableHead>
          <TableHead> Day</TableHead>
          <TableHead>Occasion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holidayList.map((holiday, index) => (
          <TableRow key={index} className="sm:text-lg text-sm text-gray-600">
            <TableCell className="text-center">{holiday["#"]}</TableCell>
            <TableCell>{holiday["Date"]}</TableCell>
            <TableCell>{holiday["Day"]}</TableCell>
            <TableCell>{holiday["Occasion"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
