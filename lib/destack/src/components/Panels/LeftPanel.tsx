import clsx from 'clsx'
import React from 'react'
import { usePreviewContent } from '../PreviewProvider/PreviewProvider'

export const LeftPanel: React.FC = () => {
  const { isPreview } = usePreviewContent()

  return (
    <div
      className={clsx('pz-panel-left', {
        'pz-panel--hidden': isPreview,
      })}
    >
      <div id="blocks"></div>
    </div>
  )
}
