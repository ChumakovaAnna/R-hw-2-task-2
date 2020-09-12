import React, { useState } from 'react';
import data from "./data";
import IconSwitch from "./IconSwitch";
import CardView from "./CardView";
import ListView from "./ListView";

function Store() {
  const [icon, setIcon] = useState("view_list")
  const products = data;

  const onSwitchIcon = () => {
    setIcon(prevIcon => prevIcon === "view_list" ? "view_module" : "view_list");
  }
  
  return (
    <>
    <IconSwitch  icon={icon} onSwitch={onSwitchIcon}></IconSwitch>
    {icon === "view_list" ? <CardView cards={products} /> : <ListView items={products}/>}
    </>
  );
}

export default Store;