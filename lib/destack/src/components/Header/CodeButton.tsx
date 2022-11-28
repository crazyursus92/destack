import React from 'react'
import { useEditorContext } from '../EditorProvider/EditorProvider'
import { IconButton } from '../IconButton/IconButton'
import { Code } from '../icons/Code'

type CodeButtonProps = {
  className?: string
}

export const CodeButton: React.FC<CodeButtonProps> = ({ className }) => {
  const { editor } = useEditorContext()

  return (
    <IconButton className={className} onClick={() => editor?.runCommand('core:open-code')}>
      <Code />
    </IconButton>
  )
}
