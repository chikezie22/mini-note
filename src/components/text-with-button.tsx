import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTextStore } from '@/store/store';
import { textType } from '@/types/types';
import { useState } from 'react';

export default function TextareaWithButton() {
  const addText = useTextStore((state) => state.addText);
  const [text, setText] = useState<string>('');
  const onSubmit = () => {
    if (text.trim()) {
      const data: textType = {
        id: '',
        content: text,
      };
      addText(data);
      setText(''); // Clear the textarea after adding
    }
  };
  return (
    <div className="grid w-full gap-2 font-neue">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your notes here."
      />
      <div className="flex justify-end gap-2">
        <Button className="bg-amber-100" onClick={onSubmit}>
          Add Note
        </Button>
        <Button variant={'secondary'} className="bg-amber-50">
          Clear Note
        </Button>
      </div>
    </div>
  );
}
