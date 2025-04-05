import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2 font-neue">
      <Textarea placeholder="Type your notes here." />
      <div className="flex justify-end gap-2">
        <Button className="bg-amber-100">Add Note</Button>
        <Button variant={'secondary'} className="bg-amber-50">
          Clear Note
        </Button>
      </div>
    </div>
  );
}
