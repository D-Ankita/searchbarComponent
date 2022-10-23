import { React, useState } from 'react'
import data from "./workflowList.json"
import '@contentstack/venus-components/build/main.css'
import './WorkflowSidebar.css'

function WorkflowSearchList(props) {
    const filteredData = data.filter((item) => {
        if (props.input === '') {
            return item;
        } else {
            return item.Desc.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul >
            {filteredData.map((item) => (
                <div className='textBox'>
                <li key={item.id} role='listItem'>{item.Desc}</li>
                </div>
                ))}
        </ul>
    )
}

export default WorkflowSearchList