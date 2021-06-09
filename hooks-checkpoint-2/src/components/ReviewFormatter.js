import {useContext, useEffect} from 'react'
import AppContext from '../Context/AppContext'

function ReviewFormatter(props) {
  const {currentItem} = useContext(AppContext);
  const {currentReviews, setCurrentReviews} = useContext(AppContext)
  const {setState} = useContext(AppContext);

useEffect(async () => {
 async function getReview() {
     await fetch("http://18.224.200.47/reviews/" + currentItem.id + "/list")
          .then(res => res.json())
          .then(json => {
              let reviews = json.results.map(result => {return {summary: result.summary, rating: result.rating}})

              // only update the new data, don't need to spread everything back into state

              setCurrentReviews(reviews)
              console.log(`testing`, reviews);
      })
  
}
getReview();
}, [])


    
        
  return currentReviews.map(review => {return <li>{review.summary} {review.rating}</li>})
    

  
}


export default ReviewFormatter;