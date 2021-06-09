import AppContext from '../Context/AppContext'
import {useContext, useEffect} from 'react';
import ReviewFormatter from './ReviewFormatter'
//import './../App.css';
import '../App.css'


function DetailFormatter(){

    const {state} = useContext(AppContext);
    const {currentItem} = state
	const {currentImg} = state
    const {clickProductList} = useContext(AppContext);
    
    //const {productList} = state;

    

    // http://18.224.200.47/products/1/styles

    /*
    async function get
    */

    

    

   useEffect(() => {
   function getImage() {
       
    fetch("http://18.224.200.47/products/" + currentItem[0].id + "/styles")
        .then(res => res.json())
        .then(json => currentImg[1](json.results[0].photos[0].thumbnail_url)
            )

   }
   getImage();
//    console.log(state);
}, [])

    return  <div className='detailCard' onClick = {(e) => clickProductList(e)}> 
                <a >

                    {/* { conditional && <div> Stuff you want to conditionally display </div> } */}
                    You clicked on {currentItem[0].name} <br></br>
                    {currentItem[0].slogan} <br></br>
                    {currentItem[0].description} <br></br>
                    {currentItem[0].category} <br></br>
                    ${currentItem[0].default_price} <br></br>

                    <ul>
                    <ReviewFormatter />
                    </ul>

                    {<img src={currentImg} alt="would have been a nice image"/>}
                </a>
            </div>
        
}

// {style.results[0].photos[0].thumbnail_url } >

export default DetailFormatter

/*
Item Details
{
		"id": 1,
		"name": "Camo Onesie",
		"slogan": "Blend in to your crowd",
		"description": "...",
		"category": "Jackets",
		"default_price": "140"
	}

*/

/*

    Style Details 

    "product_id": "1",
	"results": [
  	{
			"style_id": 1,
			"name": "Forest Green & Black",
			"original_price": "140",
			"sale_price": "0",
			"default?": 1,
			"photos": [
  			{
					"thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_1_photo_number.jpg"
				},
  			{
					"thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_1_photo_number.jpg"
				}
  			// ...
			],
		"skus": {
			"XS": 8,
			"S": 16,
			"M": 17,
			"L": 10,
			"XL": 15
		}
	},

*/