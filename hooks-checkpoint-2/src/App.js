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
 
 // reStructred the state to have independent values

  const [currentItem, setCurrentItem] = useState(null)
  const [productList, setProductList] = useState(initialProducts)
  const [showProductList, setShowProductList] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const [currentImg, setCurrentImg] = useState('')
  const [currentReviews, setCurrentReviews] = useState([])

  const state = {
    currentItem : [currentItem, setCurrentItem],
    productList : [productList, setProductList],
    showProductList: [showProductList, setShowProductList],
    showDetails : [showDetails, setShowDetails],
    currentImg : [currentImg, setCurrentImg],
    currentReviews : [currentReviews, setCurrentReviews]
  }

  // const [state, setState] = useState({ currentItem: null,
  //                                      productList: initialProducts,
  //                                      showProductList: true,
  //                                      showDetails: false,
  //                                      currentImg: '',
  //                                      currentReviews: []
  //                                     })

  // useEffect(() => {
  //    function getThumbnails() {

  //     // fetch("http://18.224.200.47/products/list")
  //     //   .then(res => res.json())
  //     //   .then((json) => setProductList(json))
  //     //   .then((returnedProductList) => )

  //     const thumbnailList = state.productList[0].map((product, index) => {
  //       fetch("http://18.224.200.47/products/" + product.id + "/styles")
  //         .then(res => res.json())
  //         .then(json => json.results[0].photos[0].thumbnail_url)

  //     })
  //     const newList = state.productList[0]
  //     console.log(newList);
  //     thumbnailList.map((img, index) => {
  //     newList[index].image = img;
  //     })
  //     state.setProductList[1](newList);
  //   }
  //   getThumbnails();
  //   //    console.log(state);
  // }, [])

  useEffect(() => {
    function getProductList() {
      fetch("http://18.224.200.47/products/list")
        .then(res => res.json())
        .then((json) => setProductList(json))
        
    }
    getProductList();
  }, [])
                         

  function clickDetails(clickedItem){
    // old nested state change
   // setState({...state, showProductList: false, showDetails: true, currentItem: clickedItem})

    // new separete state change
    setShowProductList(false)
    setShowDetails(true)
    setCurrentItem(clickedItem)
  }

  function clickProductList(e){
    //setState({...state, showProductList: true, showDetails: false, currentImg: ''})

    setShowProductList(true)
    setShowDetails(false)
    setCurrentImg('')
  }
 

  // const [state, setState] = useState({ currentItem: null,
  //                                      productList: initialProducts,
  //                                      showProductList: true,
  //                                      showDetails: false,
  //                                      currentImg: '',
  //                                      currentReviews: []
  //                                     })

  // console.log('this is the value of state right after the fetch', state)

  // if(showProductList){
  //   return (
  //       <AppContext.Provider value = {{currentImg,setCurrentImg, currentItem, productList, showProductList, showDetails,currentReviews,setCurrentReviews, clickDetails, clickProductList}}>
  //         <div className = "App">
          
  //         <div className = "App">
  //           <header className = "App-header">
  //             <ListFormatter /> 
  //           </header>
  //         </div>

  //         </div>

  //       </AppContext.Provider>     
  //     );
  // }
    
  // if(showDetails){
  //   return (
  //     <AppContext.Provider value = {{currentImg,setCurrentImg, currentItem, productList, showProductList, showDetails,currentReviews, setCurrentReviews, clickDetails, clickProductList}}>
  //       <div className = "App">
  //         <header className = "App-header">
  //           <DetailFormatter /> 
  //         </header>
  //       </div>
  //     </AppContext.Provider>     
  //    );
  // }

  return (
    //<AppContext.Provider value = {{currentImg, setCurrentImg, currentItem, productList, showProductList, showDetails,currentReviews, setCurrentReviews, clickDetails, clickProductList}}>
    <AppContext.Provider value = {{state, clickDetails, clickProductList}}>
      <div className = "App">
        {/* <div className ="button">
          <button>test</button>
        </div> */}
         <div className = "alwaysOnTop"  >
           <div className = 'navBar'onClick = {clickProductList}> Navbar 5000, always takes you back where you need 
           <button>Token Button To Allow for Pressing</button>
           </div>
         </div>
          <header className = "App-header">

            <h1> The greatest page in the worl</h1>

            {showProductList ?  <ListFormatter />  : <DetailFormatter />}
            
          </header>
        
      </div>
    </AppContext.Provider>     
  );
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


  Advanced Content

Add a nav bar and button that will also close the photo and/or display the product list again.
Add miniature thumbnail photo to each product card
Add Review score to each product card (Reviews data service)
Add a display for Question/Answers to each product that is visible only when the photo is enlarged (Questions data service)

*/