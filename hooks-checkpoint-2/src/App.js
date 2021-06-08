//import logo from './logo.svg';
import './App.css';
import ListFormatter from './components/ListFormatter'
import AppContext from './Context/AppContext'
import {useState, useEffect} from 'react'
import DetailFormatter from './components/DetailFormatter';




let initialProducts = [
  {
		"id": 1,
		"name": "Camo Onesie",
		"slogan": "Blend in to your crowd",
		"description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
		"category": "Jackets",
		"default_price": "140"
	},
  {
		"id": 2,
		"name": "Bright Future Sunglasses",
		"slogan": "You've got to wear shades",
		"description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
		"category": "Accessories",
		"default_price": "69"
	},
  {
		"id": 3,
		"name": "Morning Joggers",
		"slogan": "Make yourself a morning person",
		"description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
		"category": "Pants",
		"default_price": "40"
	}
]




function App() {
 // let productList = getProductList()
 

  const [state, setState] = useState({ currentItem: null,
                                       productList: initialProducts,
                                       showProductList: true,
                                       showDetails: false,
                                       
                                      })
// useEffect(() => {

  useEffect(() => {
    function getProductList() {
      fetch("http://18.224.200.47/products/list")
        .then(res => res.json())
        .then((json) => setState({...state, productList: json}))
        
    }
    getProductList();
  }, [])
  // async function getProductList(){
  //   let res = await fetch("http://18.224.200.47/products/list");
  //   let json = await res.json();
  //   console.log('PINGING THE SERVER');
  //   //let productList = await json[0].url;
  //   setState({...state, productList: json})
  //   return json;
  // }  
  // getProductList()
// }, [state])                          

  function clickDetails(clickedItem){
    console.log(state);
    setState({...state, showProductList: false, showDetails: true, currentItem: clickedItem})
  }

  function clickProductList(e){
    setState({...state, showProductList: true, showDetails: false})
  }
 

  // console.log('this is the value of state right after the fetch', state)

  if(state.showProductList){
    return (
        <AppContext.Provider value = {{state, clickDetails, clickProductList, setState}}>
          <div className = "App">
            <header className = "App-header">
              <ListFormatter /> 
            </header>
          </div>
        </AppContext.Provider>     
      );
  }
    
  if(state.showDetails){
    return (
      <AppContext.Provider value = {{state, clickDetails, clickProductList, setState}}>
        <div className = "App">
          <header className = "App-header">
            <DetailFormatter /> 
          </header>
        </div>
      </AppContext.Provider>     
     );
  }

  
}

export default App;

/*
Make an API call to get a product list (Products data service, subsection "list")

Make an API call to get specific details on a given product when its entry is clicked 
(Products data service - subsection ":productId")

Display a list of products as cards with text of description

Make each product clickable so that when clicked, 
it displays an image from the API for that product (Products data service - subsection "styles")

Make it so that only one product's photo is visible at a time, 
and clicking it again closes the photo 
(NOTE: If a product does not have a viable photo on the API, 
  allow for this eventuality with good conditional rendering).



*/