import { useCallback, useEffect, useState } from 'react'
import { useEditorContext } from './../components/EditorProvider/EditorProvider'
export const useUndoManager = () => {
  const [hasUndo, setHasUndo] = useState(false)
  const [hasRedo, setHasRedo] = useState(false)

  const { editor } = useEditorContext()

  useEffect(() => {
    function checkState() {
      setHasUndo(editor.UndoManager.hasUndo())
      setHasRedo(editor.UndoManager.hasRedo())
    }

    if (editor) {
      setTimeout(() => {
        checkState()
      }, 500)
    }

    editor?.on('change:canvasOffset', checkState)
    editor?.on('rerender:layer', checkState)

    return () => {
      editor?.off('change:canvasOffset', checkState)
      editor?.off('rerender:layer', checkState)
    }
  }, [editor])

  const undo = useCallback(() => {
    editor?.UndoManager.undo()
  }, [editor])

  const redo = useCallback(() => {
    editor?.UndoManager.redo()
  }, [editor])

  return {
    hasUndo,
    hasRedo,
    undo,
    redo,
  }
}
