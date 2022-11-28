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
      className={clsx(
        'w-5 h-5 relative cursor-pointer inline-flex items-center justify-center opacity-30',
        className,
        {
          'opacity-100': isActive,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
