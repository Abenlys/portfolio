import { useColorContext } from '@/hooks/Colorcontext'
import React from 'react'

export default function SectionTitle({value, id}) {
    const {isJedi, setIsJedi} = useColorContext()
  return (
    <div id={id} className='title'>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
        <span className='title__txt'>{value}&nbsp;</span>
    </div>
  )
}
