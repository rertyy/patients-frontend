import { PatientData, PatientRecord } from "@/app/models/models";
import { patientList } from "@/app/api/data";

const BASE_URL = "http://127.0.0.1:5000";

/* actual API call is this*/
export const getPatientsList = async (): Promise<PatientData[]> => {
  const res = await fetch(`${BASE_URL}/patients`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

/** testing function */
// export const getPatientsList = async (): Promise<PatientData[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(patientList);
//     }, 10);
//   });
// };

export const savePatientNotes = async (
  patientId: number,
  patientNotes: string,
): Promise<unknown> => {
  const res = await fetch(`${BASE_URL}/patients/${patientId}/notes`, {
    method: "POST",
    body: JSON.stringify({ patientId, patientNotes }),
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};

/** testing function */
// export const savePatientNotes = async (
//   id: number,
//   notesText: string,
// ): Promise<boolean> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 500);
//   });
// };

export const getPatientsById = async (
  patient_id: number,
): Promise<PatientRecord> => {
  const res = await fetch(`${BASE_URL}/${patient_id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
