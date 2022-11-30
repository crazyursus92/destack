import clsx from 'clsx'
import React from 'react'
import { PanelTabs } from '../PanelTabs/PanelTabs'
import { usePreviewContent } from '../PreviewProvider/PreviewProvider'

export const RightPanel: React.FC = () => {
  const { isPreview } = usePreviewContent()
  return (
    <div
      className={clsx('pz-panel-right', {
        'pz-panel--hidden': isPreview,
      })}
    >
      <PanelTabs />
    </div>
  )
}
