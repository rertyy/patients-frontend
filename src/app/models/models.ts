export interface PatientRecord {
  date: string;
  indicator: number;
}

export interface PatientData {
  id: number;
  name: string;
  age: number;
  description: string;
  disease: string;
  notes: string;
  records: PatientRecord[];
}
