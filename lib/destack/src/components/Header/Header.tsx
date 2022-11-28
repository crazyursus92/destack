import React from 'react'
import { MenuItem } from '../MenuItem'
import { Logo } from '../icons/Logo'
import { ArrowLeft } from '../icons/ArrowLeft'
import { DeviceControls } from '../DeviceControls/DeviceControls'
import { Button } from '../Button/Button'
import { Eye } from '../icons/Eye'
import { StateControls } from '../StateControls/StateControls'
import { usePreviewContent } from '../PreviewProvider/PreviewProvider'
import { CodeButton } from './CodeButton'

export const Header: React.FC = () => {
  const { isPreview, setIsPreview } = usePreviewContent()

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
        <CodeButton className="ml-6" />
        <Button
          icon={isPreview ? undefined : <Eye />}
          className="ml-5"
          onClick={() => setIsPreview(!isPreview)}
        >
          {isPreview ? 'Edit' : 'Preview'}
        </Button>
        <Button className="btn-accent ml-2">Publish</Button>
      </div>
    </div>
  )
}
