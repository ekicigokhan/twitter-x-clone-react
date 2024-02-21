import { PropTypes } from "prop-types";
import Content from "./content";
import Item from "./item";
import Items from "./items";
import { TabContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";
import StickyHeader from "../sticky-header";

export default function Tab({ activeTab, children }) {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const contents = children.filter((c) => c.type === Content);
  const stickyHeader = children.filter((c) => c.type === StickyHeader);
  const items = stickyHeader[0];

  const content = contents.find((c) => c.props.id === active);

  const storeData = {
    active,
    setActive,
  };

  return (
    <TabContext.Provider value={storeData}>
      {items}
      {content}
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node), // node : react elemanı
  activeTab: PropTypes.string.isRequired,
};
