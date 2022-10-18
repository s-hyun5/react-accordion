import React from "react";
import "~/index.scss"
import MultiAccordion from "~/component/MultiAccordion";
import Default from "~/component/SingleAccordion/Default";
import Collapsible from "~/component/SingleAccordion/Collapsible";

const App = () => {
  return (
      <div className='container'>
        <h1>React Accordion</h1>
          <Default/>
          <Collapsible/>
          <MultiAccordion />
      </div>
  );
};

export default App;
