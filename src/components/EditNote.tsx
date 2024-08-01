import * as React from "react";
import { NoteData, Tag } from "../types";
import NoteForm from "./NoteForm";
import { useNote } from "../hooks/useNote";

interface IEditNoteProps {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

const EditNote: React.FunctionComponent<IEditNoteProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}) => {
  const note = useNote();

  return (
    <>
      <h1 className="mb-4"> Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
      />
    </>
  );
};

export default EditNote;
