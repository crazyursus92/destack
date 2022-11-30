import type grapesjs from 'grapesjs'
import React from 'react'

type EditorContext = {
  editor?: grapesjs.Editor
}

const EditorContext = React.createContext<EditorContext>({})

type EditorProviderProps = {
  children: React.ReactNode
  editor: grapesjs.Editor
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children, editor }) => {
  window.EDITOR = editor
  return <EditorContext.Provider value={{ editor }}>{children}</EditorContext.Provider>
}

export const useEditorContext = () => React.useContext(EditorContext)
