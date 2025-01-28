import getUserinfo from '@/lib/getUserinfo'
import Image from 'next/image'
import React from 'react'

const UserBotton =  async () => {
const session = await getUserinfo()
  return (
  <Image className='fixed top-2 right-2 rounded-full cursor-pointer' src={session?.user?.image as string} alt='user image' width={45} height={45} />
)
}

export default UserBotton