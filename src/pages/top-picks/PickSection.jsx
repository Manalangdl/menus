import React from 'react'
import Pick from './Pick'

const recs = {

    "Asian": [
        {
            "name": "M Vista",
            "link" : "https://miyos.com/menu/#specialrolls",
            "src" : "top-picks-imgs/sushi-vista.png"
        },

        {
            "name" : "Inakaya",
            "link" : "https://inakayasushi.com/menu",
            "src" : "top-picks-imgs/katsu.png"
        },

        {
            "name": "Sun Ming",
            "link": "https://order.mealkeyway.com/customer/release/index?mid=356a5864386e39736e64533966556a465252693230513d3d#/main",
            "src": "top-picks-imgs/dumpling.png"
        }
    ],

    "Latino" : [
        {}
    ]
}

const PickSection = (props) => {
    
    
    
    return (
        <>
            <h2>{props.name} cuisine</h2>
            <div className='food-grid'>
            
            
            
                <Pick name = {recs[props.name][0]["name"]} src = {recs[props.name][0]["src"]} link = {recs[props.name][0]["link"]}/>
                <Pick name = {recs[props.name][1]["name"]} src = {recs[props.name][1]["src"]} link = {recs[props.name][1]["link"]}/>
                <Pick name = {recs[props.name][2]["name"]} src = {recs[props.name][2]["src"]} link = {recs[props.name][2]["link"]}/>
            </div>
        </>
    )
}

export default PickSection