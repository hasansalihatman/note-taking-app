import * as React from "react";
import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../types";

interface INewNoteProps {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

const NewNote: React.FunctionComponent<INewNoteProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}: INewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
