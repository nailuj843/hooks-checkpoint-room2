import AppContext from '../Context/AppContext'
import {useContext} from 'react';

function ListFormatter(){

    const {state} = useContext(AppContext);
    const {productList} = state
    const {clickDetails} = useContext(AppContext);
    

    //console.log('this is the state in listformatter' , productList[0])

    // let output = state.productList.map(item => <li>  <a onClick = {() =>  {clickDetails(item)}}> {item.name} </a>  </li> )



    let output = productList[0].map(item => {
       return( 
       <div className = 'listCard' onClick={() => {clickDetails(item)}}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>   
       )
        })

    // <li><a id={ind} onClick={this.getEmail} >{email.subject} {email.sender}</a></li>

    // console.log(output)

    return output
}

export default ListFormatter