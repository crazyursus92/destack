import React from 'react'
import clsx from 'clsx'

type PanelTabsProps = {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

export const PanelTab: React.FC<PanelTabsProps> = ({ children, isActive, onClick }) => {
  console.log(isActive)
  return (
    <a
      onClick={onClick}
      className={clsx('pz-panel-tab', {
        'pz-panel-tab--active': isActive,
      })}
    >
      {children}
    </a>
  )
}
