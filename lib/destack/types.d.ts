import React from 'react'
export interface dataType {
  filename: string
  content: string
}

export interface StaticBuildProps {
  data?: dataType[]
  headerComponent?: React.FC<{ children: React.ReactNode }>
}

export interface ContentProviderProps extends StaticBuildProps {
  showEditorInProd: boolean
  standaloneServer: boolean
}
