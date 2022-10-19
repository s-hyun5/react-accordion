import React, {useState} from "react";
import {data} from "~/data";

const Default = () => {
    const filterList = [
        {
            label: "기업규모",
            value: "companySize",
        },
        {
            label: "기업특징",
            value: "companyCharacter",
        },
        {
            label: "전체산업",
            value: "industry",
        },
        {
            label: "상장여부",
            value: "listing",
        },
        {
            label: "재무특징",
            value: "finance",
        },
    ];

    const [accordionList, setAccordionList] = useState(filterList.map((f) => f.value));

    const accordionToggle = (idx) => {

        const getNewState = (state) => {
            console.log(state)
            const newState = [...state];
            const isIncludes = newState.findIndex((val) => val === idx);
            console.log("isIncludes", isIncludes)
            if (isIncludes < 0) {
                newState.push(idx);
            } else {
                newState.splice(isIncludes, 1);
            }
            return newState;
        };
        setAccordionList((state) => getNewState(state));
    };


    return(
        <>
            <section>
                <h2>1. 무조건 한개의 아코디언은 열려있어야 하는 경우</h2>
                {data.map((d, d_idx) => {
                    return(
                        <div className={'accordion-wrap'} key={d_idx}>
                            <div className="accordion" onClick={() => accordionToggle("companySize")}>
                                {d.title}
                            </div>
                            <div className={`panel ${accordionList.includes("companySize") ? "toggle" : ""}`}>
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