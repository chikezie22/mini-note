import { textType } from '@/types/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
type textState = {
  text: textType[];
  addText: (newText: textType) => void;
  updateText: (updatedText: string, id: string) => void;
  deleteText: (id: string) => void;
};

// we use zustand for state management in react it calls the create fundtion that takes a callback which uses set and get we usr the set function to and pass an object where we can call method and as well define our state

export const useTextStore = create<textState>()(
  devtools(
    persist(
      (set) => ({
        text: [],
        addText: (newText) =>
          set((state) => ({
            text: [...state.text, { id: Date.now().toString(), content: newText.content }],
          })),
        updateText: (updatedText: string, id: string) =>
          set((state) => ({
            text: state.text.map((item) =>
              item.id === id ? { ...item, content: updatedText } : item
            ),
          })),
        deleteText: (id: string) =>
          set((state) => ({
            text: state.text.filter((item) => item.id !== id),
          })),
      }),
      { name: 'text-store' }
    )
  )
);
