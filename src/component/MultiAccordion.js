import React, {useState} from "react";
import {data} from "~/data";

const MultiAccordion = () => {
    const [toggleList, setToggleList] = useState([]);

    const getToggleAccordion = (idx) => {
        let newState = []
        if(toggleList.includes(idx)){
            newState = toggleList.filter(s => s !== idx)
        } else {
            newState.push(...toggleList, idx)
        }

        setToggleList(newState)
    }

 return(
     <section>
         <h2>여러개의 아코디언 동시에 토글</h2>
         {data.map((d, d_idx) => {
             return(
                 <div className={'accordion-wrap'} key={d_idx}>
                     <div className="accordion" onClick={() => getToggleAccordion(d_idx)}>
                         {d.title}
                     </div>
                     <div className={`panel ${toggleList.includes(d_idx) ? 'toggle' : ""}`}>
                         <p>
                             {d.content}
                         </p>
                     </div>
                 </div>
             )
         })}
     </section>
 )
}

export default MultiAccordion
