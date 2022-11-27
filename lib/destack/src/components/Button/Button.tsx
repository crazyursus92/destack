import React from 'react'
import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, icon }) => {
  return (
    <button className={clsx('btn', className)} onClick={onClick}>
      {icon ? <i className="mr-2">{icon}</i> : null}

      {children}
    </button>
  )
}
