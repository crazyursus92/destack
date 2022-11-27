import React from "react";
import clsx from "clsx";

type PanelTabsProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const PanelTab: React.FC<PanelTabsProps> = ({
  children,
  isActive,
  onClick,
}) => {
  console.log(isActive);
  return (
    <a
      onClick={onClick}
      className={clsx(
        "w-1/3 inline-flex cursor-pointer bg-darkPanel text-panelInactiveItem justify-center items-center",
        {
          "!text-white !bg-panel": isActive,
        }
      )}
    >
      {children}
    </a>
  );
};
