import React from 'react'

type EditorContext = {
  editor: any
}

const EditorContext = React.createContext<EditorContext>({
  editor: null,
})

type EditorProviderProps = {
  children: React.ReactNode
  editor: any
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children, editor }) => {
  return <EditorContext.Provider value={{ editor }}>{children}</EditorContext.Provider>
}

export const useEditorContext = () => React.useContext(EditorContext)
