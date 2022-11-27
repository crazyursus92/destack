import clsx from "clsx";
import React from "react";
import { Brash } from "../icons/Brash";
import { Layers } from "../icons/Layers";
import { Settings } from "../icons/Settings";
import { PanelTab } from "./PanelTab";

enum Tabs {
  Layers = "layers",
  Traits = "traits",
  Styles = "styles",
}

export const PanelTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<Tabs>(Tabs.Layers);

  return (
    <div className="w-full h-full">
      <div className="flex w-full h-14">
        <PanelTab
          onClick={() => setActiveTab(Tabs.Styles)}
          isActive={activeTab === Tabs.Styles}
        >
          <Brash />
        </PanelTab>
        <PanelTab
          onClick={() => setActiveTab(Tabs.Traits)}
          isActive={activeTab === Tabs.Traits}
        >
          <Settings />
        </PanelTab>
        <PanelTab
          onClick={() => setActiveTab(Tabs.Layers)}
          isActive={activeTab === Tabs.Layers}
        >
          <Layers />
        </PanelTab>
      </div>
      <div>
        <div
          className={clsx({ hidden: activeTab !== Tabs.Styles })}
          id="styles"
        ></div>
        <div
          className={clsx({ hidden: activeTab !== Tabs.Traits })}
          id="traits"
        ></div>
        <div
          className={clsx({ hidden: activeTab !== Tabs.Layers })}
          id="layers"
        ></div>
      </div>
    </div>
  );
};
