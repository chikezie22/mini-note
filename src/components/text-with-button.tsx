import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTextStore } from '@/store/store';
import { textType } from '@/types/types';
import { useEffect, useState } from 'react';

export default function TextareaWithButton({
  buttonText = '',
  zustandText,
  zustandTextId,
  onCloseModal,
}: {
  buttonText?: string;
  zustandText?: string;
  zustandTextId?: string;
  onCloseModal?: () => void;
}) {
  const addText = useTextStore((state) => state.addText);
  const updateText = useTextStore((state) => state.updateText);
  const [text, setText] = useState<string>('');
  useEffect(() => {
    if (zustandText !== undefined) setText(zustandText);
  }, [zustandText]);

  const onSubmit = () => {
    if (text.trim()) {
      const data: textType = {
        id: '',
        content: text,
      };

      if (zustandText && zustandTextId) {
        updateText(data.content, zustandTextId);
        if (onCloseModal) onCloseModal();
        return;
      }
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
        <Button className="bg-amber-300" onClick={onSubmit}>
          {buttonText || 'Add Note'}
        </Button>
        <Button variant={'secondary'} className="bg-amber-50">
          Clear Note
        </Button>
      </div>
    </div>
  );
}
