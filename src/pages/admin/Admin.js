import React from "react";
import { Tabs } from "antd";
import Header from "../../components/Header";
import AdminAbout from "./AdminAbout";
import AdminIntro from "./AdminIntro";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
  {portfolioData &&   <div className="mt-5 p-5 ">
       
       <Tabs defaultActiveKey="1">
         <TabPane tab="Intro" key="1">
           <AdminIntro />
         </TabPane>
         <TabPane tab="About" key="2">
           <AdminAbout />
         </TabPane>
         <TabPane tab="Experiences" key="3">
           <AdminExperiences />
         </TabPane>
      
       </Tabs>
     </div>}
    </div>
  );
}

export default Admin;
