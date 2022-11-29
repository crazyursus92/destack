import React from 'react'
import clsx from 'clsx'

type IconButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({
  isActive = true,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx('pz-icon-btn', className, {
        'pz-icon-btn--active': isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
