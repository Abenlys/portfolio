import React from 'react'
import { contactList } from './ContactList'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className='contact'>
        <div className='contact__item'>
            <Image src={contactList[0].icon} alt='adresse' width={50} height={50} />
            <p>{contactList[0].description}</p>
        </div>
        <div className='contact__item'>
          <Link href={`tel:${contactList[2].description}`}>
        <Image src={contactList[2].icon} alt='tel' width={50} height={50} />
        {/* <p>{contactList[2].description}</p> */}
        </Link>
        </div>
        <div className='contact__item'>
            <Link href={`mailto:${contactList[1].description}`}>
            <Image src={contactList[1].icon} alt='mail' width={50} height={50} />
            </Link>
        </div>
    </div>
  )
}
