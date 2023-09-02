"use client";

import { getPatientsList } from "@/app/api/fetchData";
import { useEffect, useState } from "react";
import { PatientData } from "@/app/models/models";
import PatientNameList from "@/app/patients/PatientNameList";
import PatientDetails from "@/app/patients/PatientDetails";
import Notes from "@/app/patients/Notes";
// import dynamic from "next/dynamic";
// const NoSSR = dynamic(() => import("@/app/patients/PatientLineGraph"), {
//   ssr: false,
// });

const Patients = () => {
  const [patientList, setPatientList] = useState<PatientData[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientData>();
  useEffect(() => {
    getPatientsList()
      .then((data) => {
        setPatientList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [patientList.length, selectedPatient?.notes]);

  const selectPatientById = (id: number) => {
    const patient = patientList.find((patient) => patient.id === id);
    if (patient) {
      setSelectedPatient(patient);
    }
  };

  return (
    <div className="flex flex-auto gap-2 m-5">
      <div className={"basis-1/5"}>
        <div className={"font-extrabold mb-1"}>
          {" "}
          Patients ({patientList.length}){" "}
        </div>
        <div className={"border-black border-2 rounded"}>
          <PatientNameList
            patientDataList={patientList}
            onClickEvent={selectPatientById}
          />
        </div>
      </div>
      <div className={"basis-3/5"}>
        <div className={"font-extrabold mb-1"}> Patient details </div>
        <div className={"border-black border-2 rounded"}>
          {selectedPatient ? (
            <div>
              <PatientDetails {...selectedPatient} />
            </div>
          ) : (
            <div> No patient selected </div>
          )}
        </div>
      </div>
      <div className={"basis-1/5 sticky"}>
        <div className={"font-extrabold mb-1"}> Notes </div>
        <div className={"basis-1/5  border-black border-2 rounded3"}>
          {selectedPatient ? (
            <Notes id={selectedPatient.id} notes={selectedPatient.notes} />
          ) : (
            <div> No patient selected </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patients;
