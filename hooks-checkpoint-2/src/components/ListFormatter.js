import AppContext from '../Context/AppContext'
import {useContext} from 'react';

function ListFormatter(){

    const {productList} = useContext(AppContext);
    const {clickDetails} = useContext(AppContext);
    

    // console.log('this is the state in listformatter' , state)

    // let output = state.productList.map(item => <li>  <a onClick = {() =>  {clickDetails(item)}}> {item.name} </a>  </li> )



    let output = productList.map(item => {
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