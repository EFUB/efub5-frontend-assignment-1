import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const useNoteStore = create(persist(
  (set) => ({
    notes: [],

    addNote: (title, content) => set((state) => ({
      notes: [...state.notes, { id: uuidv4(), title, content }]
    })),

    editNote: (id, newTitle, newContent) =>
      set((state) => ({
        notes: state.notes.map((note) =>
          note.id === id ? { ...note, title: newTitle, content: newContent } : note),
    })),

    deleteNote: (id) =>
      set((state) => ({
        notes: state.notes.filter((note) => note.id !== id),
      })),
  }),
  {
    name: 'note-storage',  // local storage 키 이름
  }
));

export default useNoteStore;