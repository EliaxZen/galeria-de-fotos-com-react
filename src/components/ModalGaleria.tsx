

type Props = {
  image: string;
  closeModal: () => void;
}

export const ModalGaleria = ({ image, closeModal }: Props) => {
  return (
    <>
      <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
<img src={`/images/${image}`} alt="" className="max-w-screen max-h-screen" />
      </div>
      <div onClick={closeModal} className="fixed top-5 right-5 w-110 h-10 cursor-pointer text-red-500 text-5xl font-black">
        X
      </div>
    </>
  )
}