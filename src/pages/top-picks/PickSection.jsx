import React from 'react'
import Pick from './Pick'


const recs = {
    "Asian": [
        {
            "name": "M Vista",
            "link": "https://miyos.com/menu/#specialrolls",
            "src": "top-picks-imgs/sushi-vista.png"
        },
        {
            "name": "Inakaya",
            "link": "https://inakayasushi.com/menu",
            "src": "top-picks-imgs/katsu.png"
        },
        {
            "name": "Sun Ming",
            "link": "https://order.mealkeyway.com/customer/release/index?mid=356a5864386e39736e64533966556a465252693230513d3d#/main",
            "src": "top-picks-imgs/dumpling.png"
        }
    ],
    "Latino": [
        {
            "name": "A Fuego 787",
            "link": "https://www.grubhub.com/restaurant/a-fuego-787-7720-claudia-dr-columbia/10599792",
            "src": "top-picks-imgs/mofongo.png"
        },
        {
            "name": "Taquería Jalisco",
            "link": "https://taqueria-jalisco-restaurant-columbia.pressupeats.com/#menu",
            "src": "top-picks-imgs/quesadilla.png"
        },
        {
            "name": "El Puebla",
            "link": "https://www.restaurantji.com/sc/columbia/tacos-el-puebla-/gallery/menu/#id=RkRyhObOQn.jpg",
            "src": "top-picks-imgs/taco.png"
        }
    ],
    "Italian": [
        {
            "name": "Villa Tronco",
            "link": "https://villatronco.com/columbia-columbia-sc-villa-tronco-food-menu",
            "src": "top-picks-imgs/pizza.png"
        },
        {
            "name": "Travinia",
            "link": "https://www.traviniacolumbia.com/menu",
            "src": "top-picks-imgs/lasagna.png"
        },
        {
            "name": "Madrigal",
            "link": "https://madrigalcafe.com/",
            "src": "top-picks-imgs/pasta-noodle.png"
        }
    ],
    "Southern": [
        {
            "name": "Lizard's Thicket",
            "link": "https://www.lizardsthicket.com/food-menus/",
            "src": "top-picks-imgs/lizards.png"
        },
        {
            "name": "Zesto",
            "link": "https://zestowestcolumbia.com/menu",
            "src": "top-picks-imgs/zesto.png"
        },
        {
            "name": "Mr. Friendly's",
            "link": "https://mrfriendlys.com/",
            "src": "top-picks-imgs/friendlys.png"
        }
    ],
    "Budget": [
        {
            "name": "FuruSato Bento",
            "link": "https://orderfurusato.com/menu",
            "src": "top-picks-imgs/bento.png"
        },
        {
            "name": "Groucho's Deli",
            "link": "https://www.grouchos.com/menu?_gl=1*v1mopk*_gcl_au*MTk1OTQyMDkxNC4xNzkxMTgwMTgw*_ga*MTc2MDA4MDc4Mi4xNzkxMTgwMTgw*_ga_HTYV1GXBSB*czE3OTExODAxNzkkbzEkZzAkdDE3OTExODAxNzkkajYwJGwwJGg1ODgxMzQ1MzU.",
            "src": "top-picks-imgs/grouchos.png"
        },
        {
            "name": "Mack's Cash Grocery",
            "link": "https://macks-cash-grocery.localoria.com/full-menu",
            "src": "top-picks-imgs/macks.png"
        }
    ]
};

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