"use client"

import { PhotoItem } from '@/components/PhotoItem';
import { photoList } from './../data/photoList';
import { useState } from 'react';
import { ModalGaleria } from '@/components/ModalGaleria';


const Page = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className='mx-2 pb-20'>
      <h1 className='text-center text-3xl font-black my-10'>Galeria de Fotos</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal &&
      <ModalGaleria image={imageOfModal} closeModal={closeModal}/>}
    </div>

  )
}
export default Page;