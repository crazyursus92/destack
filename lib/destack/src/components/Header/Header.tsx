import React from 'react'
import { MenuItem } from '../MenuItem'
import { Logo } from '../icons/Logo'
import { ArrowLeft } from '../icons/ArrowLeft'
import { DeviceControls } from '../DeviceControls/DeviceControls'
import { Button } from '../Button/Button'
import { Eye } from '../icons/Eye'
import { IconButton } from '../IconButton/IconButton'
import { Code } from '../icons/Code'
import { StateControls } from '../StateControls/StateControls'

export const Header: React.FC = () => {
  return (
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
      <div className="flex items-center relative">
        <DeviceControls />
      </div>
      <div className="flex items-center relative">
        <span className="text-textBtn text-sm opacity-30 mr-6">Saved</span>
        <StateControls />
        <IconButton className="ml-6">
          <Code />
        </IconButton>
        <Button icon={<Eye />} className="ml-5">
          Preview
        </Button>
        <Button className="btn-accent ml-2">Publish</Button>
      </div>
    </div>
  )
}
