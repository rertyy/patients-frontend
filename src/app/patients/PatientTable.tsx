import { PatientRecord } from "@/app/models/models";

const PatientTable = ({ records }: { records: PatientRecord[] }) => {
  return (
    <table className={"ml-3 w-1/2 max-w-full"}>
      <tbody className={"pl-3 pr-10 border-dotted border-2 border-black"}>
        <tr className="text-left">
          <th>Date</th>
          <th>Indicator</th>
        </tr>
        {records.length > 0 ? (
          records.map((record, index) => (
            <tr key={index}>
              <td className="text-left">{record.date}</td>
              <td className="text-left">{record.indicator}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>No records found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PatientTable;
