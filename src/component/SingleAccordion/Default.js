import React, {useState} from "react";
import {data} from "~/data";

const Default = () => {
    const [toggleList, setToggleList] = useState([]);

    const getToggleAccordion = (idx) => {
        let newState = []
        if(!toggleList.includes(idx)){
            newState.push(idx)
            setToggleList(newState)
        }
    }

    return(
        <>
            <section>
                <h2>1. 무조건 한개의 아코디언은 열려있어야 하는 경우</h2>
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
        </>
    )
}

export default Default;