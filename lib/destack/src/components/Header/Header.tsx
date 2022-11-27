import React from 'react'
import { MenuItem } from '../MenuItem'
import { Logo } from '../icons/Logo'
import { ArrowLeft } from '../icons/ArrowLeft'
import { DeviceControls } from '../DeviceControls/DeviceControls'

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
        <div id="panel-options"></div>
      </div>
    </div>
  )
}
