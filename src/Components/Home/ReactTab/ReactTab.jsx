import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const ReactTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Elder</Tab>
        <Tab>Space Marines</Tab>
        <Tab>Necrons</Tab>
      </TabList>

      <TabPanel>
        {<FeaturedProducts props={"Eldar"}></FeaturedProducts>}
      </TabPanel>
      <TabPanel>
        {<FeaturedProducts props={"Space Marines"}></FeaturedProducts>}
      </TabPanel>
      <TabPanel>
        {<FeaturedProducts props={"Necrons"}></FeaturedProducts>}
      </TabPanel>
    </Tabs>
  );
};

export default ReactTab;
