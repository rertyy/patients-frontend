import { PatientData } from "@/app/models/models";

interface PatientNameListProps {
  patientDataList: PatientData[];
  onClickEvent: (id: number) => void;
}

const PatientNameList = ({
  patientDataList,
  onClickEvent,
}: PatientNameListProps) => {
  return (
    <div className={"h-max p-2"}>
      {patientDataList.length === 0 ? (
        <div> No patients found </div>
      ) : (
        <ul>
          {patientDataList.map((patientData) => (
            <li
              key={patientData.id}
              onClick={() => onClickEvent(patientData.id)}
              className={"hover:cursor-pointer hover:font-bold"}
            >
              <a> {patientData.name} </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientNameList;
