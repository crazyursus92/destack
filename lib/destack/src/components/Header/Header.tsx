import React from 'react'
import { MenuItem } from '../MenuItem'
import { Logo } from '../icons/Logo'
import { ArrowLeft } from '../icons/ArrowLeft'
import { HeaderEditorContent } from './HeaderEditorContent'

type HeaderProps = {
  headerComponent?: React.FC<{ children: React.ReactNode }>
}

export const Header: React.FC<HeaderProps> = ({ headerComponent: HeaderComponent }) => {
  return HeaderComponent ? (
    <HeaderComponent>
      <HeaderEditorContent />
    </HeaderComponent>
  ) : (
    <div className="flex px-8 py-6 shadow-sm justify-between flex-shrink-0 z-10 relative">
      <div className="flex items-center">
        <a href="/" className="mr-10">
          <Logo />
        </a>
        <MenuItem href="/" icon={<ArrowLeft />} disabled={true} className="mr-6">
          Back
        </MenuItem>
        <MenuItem>My Website</MenuItem>
      </div>
      <HeaderEditorContent />
    </div>
  )
}
