import { loadPanels } from '../lib/panels'
import { loadTraits } from '../lib/traits'
import { loadComponents } from '../lib/components'
import { loadBlocks } from '../lib/blocks'
import { fetchJSON, escapeName } from '../utils'
import { appendCss } from '../lib/css'
import { handleEvents } from '../lib/events'

import { ChangeEvent } from 'react'
import { standaloneServerPort as port } from '../../server/config'

const uploadFile = (e, editor, standaloneServer): void => {
  const files = e.dataTransfer ? e.dataTransfer.files : e.target.files
  console.log(files, 'uploadFile')
  const formData = new FormData()
  for (const i in files) {
    formData.append('file-' + i, files[i])
  }

  const baseUrl = standaloneServer ? `http://localhost:${port}` : ''
  fetch(`${baseUrl}/api/builder/handle`, { method: 'POST', body: formData })
    .then((res) => res.json())
    .then((images) => {
      editor.AssetManager.add(images)
    })
}

const initEditor = async (startServer = true, standaloneServer): Promise<any> => {
  const grapesjs = await import('grapesjs')

  // for 'npm run test' only
  globalThis.grapesjs = grapesjs

  if (startServer) {
    assetManagerOptions.uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e, editor, standaloneServer, 'assetManagerOptions.uploadFile')
      uploadFile(e, editor, standaloneServer)
    }
    editorOptions.assetManager = assetManagerOptions
  }

  // need var intead of const so it's global
  // and its accessible in uploadFile function
  const editor = grapesjs.init(editorOptions)

  loadTraits(editor)
  loadPanels(editor, startServer)
  loadComponents(editor)
  loadBlocks(editor)

  appendCss(editor)

  if (startServer) handleEvents(editor, standaloneServer)
  if (startServer) loadTemplate(editor, standaloneServer)

  return editor
}

const loadTemplate = async (editor, standaloneServer): Promise<void> => {
  const baseUrl = standaloneServer ? `http://localhost:${port}` : ''
  const data = await fetchJSON({ method: 'get', url: `${baseUrl}/api/builder/handle` })
  const pathNameWindows = location.pathname === '/' ? '\\default.json' : `${location.pathname}.json`
  const pathNameUnix = location.pathname === '/' ? '/default.json' : `${location.pathname}.json`
  const component = Object.keys(data).find((c) =>
    [pathNameWindows, pathNameUnix].includes(data[c].filename),
  )
  if (!component) return
  const content = JSON.parse(data[component].content)
  editor.setComponents(JSON.parse(content.components))
  editor.setStyle(JSON.parse(content.styles))
}

const assetManagerOptions = {
  storageType: '',
  storeOnChange: true,
  storeAfterUpload: true,
  assets: [],
  uploadFile,
}

const editorOptions = {
  selectorManager: { escapeName, appendTo: '#selectors' },
  container: '#gjs',
  height: '100%',
  layerManager: {
    appendTo: '#layers',
  },
  traitManager: {
    appendTo: '#traits',
  },
  styleManager: {
    appendTo: '#styles',
    sectors: [
      {
        name: 'General',
        open: false,
        // properties: [
        //   {
        //     name: 'Position',
        //     property: 'position',
        //     type: 'select',
        //     default: 'static',
        //     options: [
        //       { id: 'static', label: 'static' },
        //       { id: 'relative', label: 'relative' },
        //       { id: 'absolute', label: 'absolute' },
        //       { id: 'fixed', label: 'fixed' },
        //     ],
        //   },
        // ],
        buildProps: ['float', 'position', 'display', 'top', 'right', 'left', 'bottom'],
      },
      {
        name: 'Flex',
        open: false,
        buildProps: [
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-items',
          'align-content',
          'order',
          'flex-basis',
          'flex-grow',
          'flex-shrink',
          'align-self',
        ],
      },
      {
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      },
      {
        name: 'Typography',
        open: false,
        buildProps: [
          'font-family',
          'font-size',
          'font-weight',
          'letter-spacing',
          'color',
          'line-height',
          'text-align',
          'text-shadow',
        ],
        properties: [
          {
            property: 'text-align',
            list: [
              { value: 'left', className: 'fa fa-align-left' },
              { value: 'center', className: 'fa fa-align-center' },
              { value: 'right', className: 'fa fa-align-right' },
              { value: 'justify', className: 'fa fa-align-justify' },
            ],
          },
        ],
      },
      {
        name: 'Decorations',
        open: false,
        buildProps: [
          'border-radius-c',
          'background-color',
          'border-radius',
          'border',
          'box-shadow',
          'background',
        ],
      },
      { name: 'Extra', open: false, buildProps: ['transition', 'perspective', 'transform'] },
    ],
  },
  storageManager: { autoload: false },
  blockManager: {
    appendTo: '#blocks',
    custom: true,
  },
  showDevices: false,
  traitsEditor: true,
  assetManager: assetManagerOptions,
}
export { initEditor }
