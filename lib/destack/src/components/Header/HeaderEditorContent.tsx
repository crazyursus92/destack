import React from 'react'
import { DeviceControls } from '../DeviceControls/DeviceControls'
import { Button } from '../Button/Button'
import { Eye } from '../icons/Eye'
import { StateControls } from '../StateControls/StateControls'
import { CodeButton } from './CodeButton'
import { usePreviewContent } from '../PreviewProvider/PreviewProvider'

export const HeaderEditorContent: React.FC = () => {
  const { isPreview, setIsPreview } = usePreviewContent()
  return (
    <>
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
    </>
  )
}
