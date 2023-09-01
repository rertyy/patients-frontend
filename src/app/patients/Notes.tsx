"use client";

import { useEffect, useState } from "react";
import timeToString from "@/app/util/timeToString";
import { savePatientNotes } from "@/app/api/fetchData";

const saveNotes = (
  id: number,
  notesText: string,
  setSaved: (value: ((prevState: boolean) => boolean) | boolean) => void,
  setSavedTime: (value: Date) => void,
) => {
  console.log("notes saved");
  savePatientNotes(id, notesText).then((response) => {
    if (response) {
      setSaved(true);
      setSavedTime(new Date());
    } else {
      console.log("error saving notes");
    }
  });
};

interface NotesProps {
  id: number;
  notes: string;
}

const Notes = ({ id, notes }: NotesProps) => {
  const [notesText, setNotesText] = useState(notes);
  const [saved, setSaved] = useState(false);
  const [savedTime, setSavedTime] = useState(new Date());
  const [errorSaving, setErrorSaving] = useState(false);

  useEffect(() => {
    setNotesText(notes);
  }, [id]);

  return (
    <div className={""}>
      <textarea
        content={notesText}
        data-placeholder={"Insert your notes here"}
        onChange={(e) => {
          setNotesText(e.target.value);
          setSaved(false);
          !saved &&
            setTimeout(
              () => saveNotes(id, notesText, setSaved, setSavedTime),
              2000,
            );
        }}
        placeholder={"Insert your notes here"}
        className={"border-4 p-3 m-2 overflow-y-auto h-full w-10/12"}
      />
      <div
        className={`mt-0.5 ml-2 text-xs ${
          saved ? "text-gray-600" : "text-red-600"
        }`}
      >
        {saved ? `Last Saved: ${timeToString(savedTime)}` : "Not saved"}
      </div>
      <button
        type={"button"}
        onClick={() => saveNotes(id, notesText, setSaved, setSavedTime)}
        className={"border-black border-2 p-2 m-2 rounded hover:cursor-pointer"}
      >
        Save
      </button>
    </div>
  );
};

export default Notes;
