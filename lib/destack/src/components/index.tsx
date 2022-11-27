import React, { FC, useEffect, useState, useRef } from 'react'
import { ContentProviderProps } from '../../types'
import { ToastContainer } from './toast'
import { Logo } from './icons/Logo'

import devStyles from '../css/dist/dev.module.css'
import prodStyles from '../css/prod.module.css'

import { tailwindCssUrl } from '../../server/config'
import { ArrowLeft } from './icons/ArrowLeft'
import { MenuItem } from './MenuItem'
import { EditorProvider } from './EditorProvider/EditorProvider'
import { Header } from './Header/Header'
import { PanelTabs } from './PanelTabs/PanelTabs'

const ContentProvider: FC<ContentProviderProps> = ({
  data,
  showEditorInProd = false,
  standaloneServer = false,
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
      <div style={{ height: '100%', margin: '0 auto' }}>
        <style>{devStyles}</style>
        <div className="flex flex-col h-full">
          <EditorProvider editor={editor}>
            <Header />
          </EditorProvider>

          <div className="flex px-8 py-6 hidden shadow-sm justify-between flex-shrink-0 z-10 relative">
            <div className="flex items-center">
              <a href="/" className="mr-10">
                <Logo />
              </a>
              <MenuItem href="/" icon={<ArrowLeft />} disabled={true} className="mr-6">
                Back
              </MenuItem>
              <MenuItem>My Website</MenuItem>
            </div>
            <div id="panel-devices" className="flex items-center relative"></div>
            <div className="flex items-center relative">
              <div id="panel-options"></div>
            </div>
          </div>
          <div className="flex h-full" id="editor-content">
            <div className="flex w-sidebar p-3 bg-panel overflow-auto  scrollbar-hide">
              <div id="blocks"></div>
            </div>
            <div id="gjs"></div>
            <div className="flex w-sidebar bg-panel overflow-auto  scrollbar-hide">
              <PanelTabs />
            </div>
          </div>
        </div>
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
