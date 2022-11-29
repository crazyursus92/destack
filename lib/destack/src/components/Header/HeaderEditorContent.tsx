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
      <div className="pz-header-content-item">
        <DeviceControls />
      </div>
      <div className="pz-header-content-item">
        <span className="pz-header-content-save-text">Saved</span>
        <StateControls />
        <CodeButton className="pz-header-code-btn" />
        <Button
          icon={isPreview ? undefined : <Eye />}
          className="pz-header-preview-btn"
          onClick={() => setIsPreview(!isPreview)}
        >
          {isPreview ? 'Edit' : 'Preview'}
        </Button>
        <Button className="btn-accent pz-header-publish">Publish</Button>
      </div>
    </>
  )
}
