
function ProductListView(){
    return (
        <AppContext.Provider value = {{state}} >
            <div className="App">
            <header className="App-header">
                
                <div>
                Product List Viewer 4000 <br></br>
    
                <ul>
                    <ListFormatter />
                </ul>
    
    
                </div>  
            </header>
            </div>
        </AppContext.Provider>
    )
}

export default ProductListView