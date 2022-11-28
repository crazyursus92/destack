import React from 'react'
import { useEditorContext } from '../EditorProvider/EditorProvider'

type PreviewContext = {
  isPreview: boolean
  setIsPreview: (isPreview: boolean) => void
}

export const PreviewContext = React.createContext<PreviewContext>({
  isPreview: false,
  setIsPreview: () => {
    throw new Error('setIsPreview not implemented')
  },
})

export const PreviewProvider: React.FC = ({ children }) => {
  const [isPreview, setIsPreview] = React.useState(false)
  const { editor } = useEditorContext()

  const setIsPreviewCallback = React.useCallback(
    (isPreview: boolean) => {
      setIsPreview(isPreview)
      if (isPreview) {
        editor?.runCommand('preview')
      } else {
        editor?.stopCommand('preview')
      }
    },
    [editor],
  )

  return (
    <PreviewContext.Provider value={{ isPreview, setIsPreview: setIsPreviewCallback }}>
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreviewContent = () => React.useContext(PreviewContext)
