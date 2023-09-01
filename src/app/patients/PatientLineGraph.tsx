"use client";
// recharts needs 'use client' to be declared

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label,
} from "recharts";
import { PatientData, PatientRecord } from "@/app/models/models";
import stringToDate from "@/app/util/stringToDate";
import { format } from "date-fns";

const formatXAxis = (tickItem: string) => {
  const date = new Date(tickItem);
  return format(date, "dd/MMM/yyyy");
};

interface PatientLineGraphProps {
  id: number;
  name: string;
  disease: string;
  records: PatientRecord[];
}

const formatRecords = (record: PatientRecord) => {
  return { date: stringToDate(record.date), indicator: record.indicator };
};

const PatientLineGraph = ({
  id,
  name,
  disease,
  records,
}: PatientLineGraphProps) => {
  if (records?.length === 0) {
    return <div> No records found</div>;
  }
  const patientRecords = records.map(formatRecords) as any[];
  return (
    <ResponsiveContainer
      height={300}
      width="80%"
      className={"max-h-[500px] max-w-[500px]"}
    >
      <LineChart
        width={600}
        height={300}
        data={patientRecords}
        margin={{ top: 15, right: 5, bottom: 15, left: 5 }}
      >
        <Line type="monotone" dataKey="indicator" stroke="#000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" tickFormatter={formatXAxis} scale="time">
          <Label value={"Date"} offset={0} position={"bottom"}></Label>
        </XAxis>
        <YAxis>
          <Label
            value={"Indicator"}
            angle={-90}
            offset={0}
            position={"insideLeft"}
          ></Label>
        </YAxis>
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PatientLineGraph;
