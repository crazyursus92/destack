import React, { FC, useEffect, useState, useRef } from 'react'
import { ContentProviderProps } from '../../types'
import { ToastContainer } from './toast'
import { Logo } from './icons/Logo'

import devStyles from '../css/dist/dev.module.css'
import prodStyles from '../css/prod.module.css'
import 'grapesjs/dist/css/grapes.min.css'

import { tailwindCssUrl } from '../../server/config'
import { EditorProvider } from './EditorProvider/EditorProvider'
import { Header } from './Header/Header'
import { LeftPanel } from './Panels/LeftPanel'
import { RightPanel } from './Panels/RightPanel'
import { PreviewProvider } from './PreviewProvider/PreviewProvider'

const ContentProvider: FC<ContentProviderProps> = ({
  data,
  showEditorInProd = false,
  standaloneServer = false,
  headerComponent,
}) => {
  const mounted = useRef<boolean>(false)
  const [css, setCss] = useState<string | undefined>()
  const [html, setHtml] = useState<string | undefined>()
  const [editor, setEditor] = useState<any>()

  const isDev = !data
  const showEditor = isDev || showEditorInProd
  const startServer = isDev && !showEditorInProd

  const [tailwindLoaded, setTailwindLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (mounted.current) return

    if (showEditor) {
      import('./initEditor')
        .then((c) => c.initEditor(startServer, standaloneServer))
        .then((e) => {
          setEditor(e)
        })
    } else {
      const pathNameWindows =
        location.pathname === '/' ? '\\default.json' : `${location.pathname}.json`
      const pathNameUnix = location.pathname === '/' ? '/default.json' : `${location.pathname}.json`
      const template = data.find((d) => [pathNameWindows, pathNameUnix].includes(d.filename))
      if (template) {
        const content = JSON.parse(template.content)
        setCss(content.css)
        setHtml(content.html)
      }
    }
    mounted.current = true
  }, [])

  if (showEditor)
    return (
      <div id="custom-editor" style={{ height: '100vh', margin: '0 auto' }}>
        <style>{devStyles}</style>
        <EditorProvider editor={editor}>
          <PreviewProvider>
            <div className="pz-editor-wrapper">
              <Header headerComponent={headerComponent} />
              <div className="pz-editor-content" id="editor-content">
                <LeftPanel />
                <div id="gjs"></div>
                <RightPanel />
              </div>
            </div>
          </PreviewProvider>
        </EditorProvider>
      </div>
    )
  else
    return (
      <>
        <link rel="stylesheet" onLoad={() => setTailwindLoaded(true)} href={tailwindCssUrl} />
        <style>{prodStyles}</style>
        <style> {css}</style>
        {(!standaloneServer || tailwindLoaded) && (
          <div dangerouslySetInnerHTML={{ __html: html ?? '' }}></div>
        )}
        <ToastContainer />
      </>
    )
}
export { ContentProvider }
