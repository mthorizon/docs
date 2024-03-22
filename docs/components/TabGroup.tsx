import React, { useState } from "react";

// Tab component for each tab heading
const Tab = ({ children, onClick, isActive }: any) => {
  return (
    <button className={isActive ? 'active' : ''} onClick={onClick}>
      {children}
    </button>
  );
};

// TabPanel component
const TabPanel = ({ children, isActive }: any) => {
  return isActive ? <div>{children}</div> : null;
};

// TabGroup component that wraps the Tab and TabPanel components
const TabGroup = ({ children }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsAndPanels = React.Children.toArray(children);
  const tabs = tabsAndPanels.filter((child: any) => child.type === Tab);
  const tabPanels = tabsAndPanels.filter((child: any) => child.type === TabPanel);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab: any, index) =>
          React.cloneElement(tab, {
            key: index,
            onClick: () => setSelectedTab(index),
            isActive: selectedTab === index,
          })
        )}
      </div>
      <div className="tab-panels">
        {tabPanels.map((panel: any, index) =>
          React.cloneElement(panel, {
            key: index,
            isActive: selectedTab === index,
          })
        )}
      </div>
    </div>
  );
};

export { TabGroup, TabPanel, Tab };
