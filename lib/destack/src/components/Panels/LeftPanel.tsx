import clsx from 'clsx'
import React from 'react'
import { usePreviewContent } from '../PreviewProvider/PreviewProvider'

export const LeftPanel: React.FC = () => {
  const { isPreview } = usePreviewContent()

  return (
    <div
      className={clsx('flex w-sidebar p-3 bg-panel overflow-auto  scrollbar-hide', {
        hidden: isPreview,
      })}
    >
      <div id="blocks"></div>
    </div>
  )
}
