import {useContext, useEffect} from 'react'
import AppContext from '../Context/AppContext'

function ReviewFormatter(props) {
  const {state} = useContext(AppContext);
  const {currentItem} = state
  const {currentReviews} = state
  

  useEffect( () => {
  function getReview() {
      fetch("http://18.224.200.47/reviews/" + currentItem[0].id + "/list")
            .then(res => res.json())
            .then(json => {
                let reviews = json.results.map(result => {return {summary: result.summary, rating: result.rating}})

                // only update the new data, don't need to spread everything back into state
                
                currentReviews[1](reviews)
                
        })
    
    }
    getReview();
  }, [])

  console.log(currentReviews)
    
        
  return currentReviews[0].map(review => {return <li>{review.summary} {review.rating}</li>})
    

  
}


export default ReviewFormatter;