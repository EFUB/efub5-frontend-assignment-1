import { create } from 'zustand'
import { persist } from 'zustand/middleware' 

const useNoteStore = create(
  persist( 
    (set, get) => ({
      notes: [], // 초기 상태 정의 

      // 메모 추가
      addNote: (date, content) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              date,
              content,
            },
          ],
        })),

      // 메모 삭제: 특정 date를 받아서 notes 배열에서 삭제 
      deleteNote: (date) => 
        set((state) => ({
            notes: state.notes.filter((note) => note.date !== date), 
        })),

      // 단일 메모 조회: date 일치하는 note 찾기 
      getNoteByDate: (date) => 
        get().notes.find(note => note.date === date)

    }),
    {
      name: 'memo-storage', // localStorage key (데이터 자동 저장)
    }
  )
)

export default useNoteStore; 
