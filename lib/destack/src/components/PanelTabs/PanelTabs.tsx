import clsx from 'clsx'
import React from 'react'
import { Brash } from '../icons/Brash'
import { Layers } from '../icons/Layers'
import { Settings } from '../icons/Settings'
import { PanelTab } from './PanelTab'

enum Tabs {
  Layers = 'layers',
  Traits = 'traits',
  Styles = 'styles',
}

export const PanelTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<Tabs>(Tabs.Styles)

  return (
    <div className="pz-panel-tabs">
      <div className="pz-panel-tabs-controls ">
        <PanelTab onClick={() => setActiveTab(Tabs.Styles)} isActive={activeTab === Tabs.Styles}>
          <Brash />
        </PanelTab>
        <PanelTab onClick={() => setActiveTab(Tabs.Traits)} isActive={activeTab === Tabs.Traits}>
          <Settings />
        </PanelTab>
        <PanelTab onClick={() => setActiveTab(Tabs.Layers)} isActive={activeTab === Tabs.Layers}>
          <Layers />
        </PanelTab>
      </div>
      <div>
        <div className={clsx({ hidden: activeTab !== Tabs.Styles })}>
          <div id="selectors"></div>
          <div id="styles"></div>
        </div>
        <div
          className={clsx({ hidden: activeTab !== Tabs.Traits }, 'pz-panel-tabs-content-settings')}
        >
          <div className="pz-panel-tabs-content-settings-title">Component settings</div>
          <div id="traits"></div>
          <div id="components"></div>
        </div>
        <div className={clsx({ hidden: activeTab !== Tabs.Layers })} id="layers"></div>
      </div>
    </div>
  )
}
