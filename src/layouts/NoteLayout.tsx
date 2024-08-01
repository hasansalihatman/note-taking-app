import * as React from "react";
import { Note } from "../types";
import { Navigate, Outlet, useParams } from "react-router-dom";

interface INoteLayoutProps {
  notes: Note[];
}

const NoteLayout: React.FunctionComponent<INoteLayoutProps> = ({
  notes,
}: INoteLayoutProps) => {
  const { id } = useParams<{ id: string }>();
  const note = notes?.find((n) => n.id === id);
  console.log('id', id);
  console.log('note', note);
  if (note == null) {
    return <Navigate to="/" replace />;
  }

  return <Outlet context={note} />;
};

export default NoteLayout;
