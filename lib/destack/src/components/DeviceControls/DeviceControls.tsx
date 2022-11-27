import React, { useCallback } from 'react'
import { useEditorContext } from '../EditorProvider/EditorProvider'
import { IconButton } from '../IconButton/IconButton'
import { Desktop } from '../icons/Desktop'
import { Mobile } from '../icons/Mobile'
import { Tablet } from '../icons/Tablet'

export enum Devices {
  Desktop = 'Desktop',
  Tablet = 'Tablet',
  Mobile = 'Mobile portrait',
}

export const DeviceControls: React.FC = () => {
  const [currentDevice, setCurrentDevice] = React.useState(Devices.Desktop)
  const [withText, setWithText] = React.useState('auto')
  const { editor } = useEditorContext()

  const onChangeDevice = useCallback(
    (device: Devices) => {
      setCurrentDevice(device)
      editor.setDevice(device)
      console.log(editor.DeviceManager.get(device)?.width, editor.DeviceManager.get(device))
      setWithText(editor.DeviceManager.get(device)?.attributes?.width || 'auto')
    },
    [editor],
  )

  return (
    <div className="flex gap-4 pl-48">
      <IconButton
        onClick={() => onChangeDevice(Devices.Desktop)}
        isActive={currentDevice === Devices.Desktop}
      >
        <Desktop />
      </IconButton>
      <IconButton
        onClick={() => onChangeDevice(Devices.Tablet)}
        isActive={currentDevice === Devices.Tablet}
      >
        <Tablet />
      </IconButton>
      <IconButton
        onClick={() => onChangeDevice(Devices.Mobile)}
        isActive={currentDevice === Devices.Mobile}
      >
        <Mobile />
      </IconButton>
      <div className="flex ">
        <div className="text-textBtn text-sm mr-2">{withText}</div>
        <div className="text-textBtn text-sm">100%</div>
      </div>
    </div>
  )
}
