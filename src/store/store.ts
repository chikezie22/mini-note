import { textType } from '@/types/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
type textState = {
  text: textType[];
  addText: (newText: textType) => void;
  updateText: (updatedText: string, id: string) => void;
};

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
      }),
      { name: 'text-store' }
    )
  )
);
