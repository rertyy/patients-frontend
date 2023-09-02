import { PatientData, PatientRecord } from "@/app/models/models";

const LOCALHOST = "http://127.0.0.1:5000";
const RENDER = "https://patients-api-gik9.onrender.com";
const BASE_URL = RENDER;

/* actual API call is this*/
export const getPatientsList = async (): Promise<PatientData[]> => {
  const res = await fetch(`${BASE_URL}/patients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

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
  console.log("id", patientId);
  console.log("notes:", patientNotes);
  const res = await fetch(`${BASE_URL}/patients/${patientId}/notes`, {
    method: "POST",
    body: JSON.stringify({ patientNotes }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Error: ${res.statusText.toString()}`);
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
