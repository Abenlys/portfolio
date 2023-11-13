import React from 'react'
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function Pof({workDetail}) {
  return (
    <div className='pof'>
        <h2 className='pof__title'>the conquered powers of force :</h2>
        <ul className={`pof__liste ${roboto.className}`}>
            {workDetail.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
