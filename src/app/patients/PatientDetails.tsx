import { PatientData } from "@/app/models/models";
import PatientTable from "@/app/patients/PatientTable";
import PatientLineGraph from "@/app/patients/PatientLineGraph";

const PatientDetails = ({
  id,
  name,
  description,
  disease,
  records,
  age,
}: PatientData) => {
  return (
    <div className={"p-2 "}>
      <div className={"flex flex-row"}>
        <div>
          <div className={"font-bold mb-1"}> Basic Information </div>
          <div className={"flex gap-2 mb-3"}>
            <div className={"basis-auto ml-3 font-bold"}>
              <div> Name: </div>
              <div> Age: </div>
              <div> Disease: </div>
            </div>
            <div className={"basis-auto"}>
              <div>{name}</div>
              <div>{age}</div>
              <div>{disease}</div>
            </div>
          </div>
        </div>
        <div
          className={
            "border-2 border-black w-1/8 aspect-[3/4] ml-auto mr-5 mt-5 flex justify-center align-middle"
          }
        >
          <div className={"p-2"}>Image goes here</div>
        </div>
      </div>
      <div>
        <div className={"font-bold"}>Description: </div>
        <div className={"ml-3 mb-5 mt-1 mr-5"}>{description}</div>
        <div className={"font-bold"}> Medical History </div>
        <PatientTable records={records} />
        <PatientLineGraph
          id={id}
          name={name}
          disease={disease}
          records={records}
        />
      </div>
    </div>
  );
};

export default PatientDetails;
