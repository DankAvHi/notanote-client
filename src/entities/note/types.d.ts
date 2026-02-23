export type Note = {
    id: string;
    text: string;
    isChecked: boolean;
}

export type NoteResponse = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    text: string;
    isChecked: boolean;
    authorId: string;
}

export type Notes = Note[]
export type NotesResponse = NoteResponse[]

export type GetNoteDto = {
    id: string
}
export type DeleteNoteDto = {
    id: string
}

export type CreateNoteDto = {
    text: string
}
export type UpdateNoteDto = {
    id: string;
    text: string,
    isChecked: string
}