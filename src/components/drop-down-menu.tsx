'use client'

import React, { ReactNode, useState } from 'react'
import Profile from './profile'
import { UserType } from '@/app/lib/definitions'

export default function DropDownMenu({ user, children, className }: { user: UserType, children: ReactNode, className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='relative'>
      <Profile className={className} func={setMenuOpen} image={user?.photo} name={user?.name} menuOpen={menuOpen}/>
      {menuOpen && children}
    </div>
  )
}
