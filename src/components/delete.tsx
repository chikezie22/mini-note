import { useTextStore } from '@/store/store';
import { Button } from './ui/button';

export default function Delete({
  zustandTextId,
  onCloseModal,
}: {
  zustandTextId: string;
  onCloseModal: () => void;
}) {
  const deleteText = useTextStore((state) => state.deleteText);
  const handleDelete = (zustandTextId: string) => {
    if (onCloseModal) {
      deleteText(zustandTextId);
      onCloseModal();
    }
  };
  return (
    <div className="max-sm:max-w-[300px] w-full bg-amber-100/40 grid gap-2  px-4 py-2  ">
      <div className="flex justify-between items-center">
        <h3>Are you sure you want to perform this action ?</h3>
        <div className="space-x-2.5">
          <Button onClick={() => handleDelete(zustandTextId)} variant={'destructive'}>
            Yes
          </Button>
          <Button variant={'ghost'} onClick={() => onCloseModal()}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
