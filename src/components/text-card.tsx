import { textType } from '@/types/types';
// import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import Modal from './modal';
import { Delete, TextWithButton } from '.';

export default function TextCard({ text }: { text: textType }) {
  return (
    <div className=" w-full  bg-amber-100/40 flex gap-2 justify-between px-4 py-2 lg:px-10 lg:py-5 max-md:flex-col ">
      <p className="font-neue text-base font-normal">{text.content}</p>
      {/* <HiOutlineEllipsisVertical className="hover:cursor-pointer size-5" /> */}
      <div className="flex justify-center items-center gap-2.5 max-md:justify-end">
        <Modal>
          <Modal.Open opens="update-note">Update</Modal.Open>
          <Modal.Window name="update-note">
            <TextWithButton
              zustandText={text.content}
              zustandTextId={text.id}
              buttonText="Update Note"
            />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open opens="delete-note" variant="destructive">
            Delete
          </Modal.Open>
          <Modal.Window name="delete-note">
            <Delete
              zustandTextId={text.id}
              onCloseModal={() => {
                /* Add modal close logic here */
              }}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
