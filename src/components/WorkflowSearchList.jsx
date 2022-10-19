import { React, useState } from 'react'
import data from "./workflowList.json"


function WorkflowSearchList(props) {
    const filteredData = data.filter((item) => {
        if (props.input === '') {
            return item;
        } else {
            return item.Desc.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id} role='listItem'>{item.Desc}</li>
                ))}
        </ul>
    )
}

export default WorkflowSearchList