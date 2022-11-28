import clsx from 'clsx'
import React from 'react'
import { PanelTabs } from '../PanelTabs/PanelTabs'
import { usePreviewContent } from '../PreviewProvider/PreviewProvider'

export const RightPanel: React.FC = () => {
  const { isPreview } = usePreviewContent()
  return (
    <div
      className={clsx('flex w-sidebar bg-panel overflow-auto  scrollbar-hide', {
        hidden: isPreview,
      })}
    >
      <PanelTabs />
    </div>
  )
}
