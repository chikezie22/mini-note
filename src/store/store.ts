import { textType } from '@/types/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
type textState = {
  text: textType[];
  addText: (newText: textType) => void;
};

export const useTextStore = create<textState>()(
  devtools((set) => ({
    text: [],
    addText: (newText) =>
      set((state) => ({
        text: [...state.text, { id: Date.now().toString(), content: newText.content }],
      })),
  }))
);
