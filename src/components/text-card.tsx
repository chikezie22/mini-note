import { textType } from '@/types/types';
// import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import Modal from './modal';
import { TextWithButton } from '.';
export default function TextCard({ text }: { text: textType }) {
  return (
    <div className="max-w-[300px] bg-amber-100/40 py-2 px-1 flex justify-between">
      <p className="font-neue text-base font-normal">{text.content}</p>
      {/* <HiOutlineEllipsisVertical className="hover:cursor-pointer size-5" /> */}
      <Modal>
        <Modal.Open opens="update-note">Update</Modal.Open>
        <Modal.Window name="update-note">
          <TextWithButton buttonText="Update Note" />
        </Modal.Window>
      </Modal>
    </div>
  );
}
