import React from 'react'
import { useUndoManager } from '../../hooks/useUndoManager'
import { IconButton } from '../IconButton/IconButton'
import { Redo } from '../icons/Redo'
import { Undo } from '../icons/Undo'

export const StateControls: React.FC = () => {
  const { hasRedo, hasUndo, undo, redo } = useUndoManager()
  return (
    <div className="flex gap-4">
      <IconButton isActive={hasUndo} onClick={undo}>
        <Undo />
      </IconButton>
      <IconButton isActive={hasRedo} onClick={redo}>
        <Redo />
      </IconButton>
    </div>
  )
}
