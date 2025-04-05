import { textType } from '@/types/types';

import { create } from 'zustand';
type textState = {
  text: textType[];
  addText: (newText: textType) => void;
};

export const useTextStore = create<textState>((set) => ({
  text: [],
  addText: (newText) =>
    set((state) => ({
      text: [...state.text, { id: Date.now().toString(), content: newText.content }],
    })),
}));
