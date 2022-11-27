import clsx from 'clsx'
import React from 'react'

type MenuItemProps = {
  children: React.ReactNode
  className?: string
  href?: string
  icon?: React.ReactNode
  disabled?: boolean
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className = '',
  href,
  icon,
  disabled,
}) => {
  return (
    <a
      href={href}
      className={clsx('flex items-center', className, {
        'opacity-50 pointer-event-none': disabled,
      })}
    >
      {icon && <i className="mr-2">{icon}</i>}
      {children}
    </a>
  )
}
