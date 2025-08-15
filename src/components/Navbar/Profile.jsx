import React from 'react'
import { Button } from '../ui/button'
import Image from '../ui/image'
const Profile = () => {
function clicked() {
    alert('how are you')
    console.log('hi')
}
  return (
        
        <div className=' w-[20%] max-w-[30%] flex items-center gap-[8px] '>

           <Button className='h-[40px] w-[40px] border-2 border-white '>AA </Button>
           <div className='flex flex-col items-start justify-center tracking-tighter leading-none '>
                <h6 className='mb-0.5 font-semibold'>Awais Arif</h6>
                <h4 className=''>Admin</h4>
           </div>
            
            <Image src="/arrow-down.svg" alt="arrow-down" className='w-[18px] h-[18px]' onClick= {() =>{clicked()}} />
           


        </div>
  )
}

export default Profile