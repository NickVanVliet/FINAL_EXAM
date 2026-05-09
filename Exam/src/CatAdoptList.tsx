type CatAdoptProps = {
  cats: string[]
  newCat: string
  setNewCat: React.Dispatch<React.SetStateAction<string>>
  addCat: () => void
}

/* Moved the components of the list and input to a separate component for visibilty and clarity */
function CatAdoptList ( { cats, newCat, setNewCat, addCat } : CatAdoptProps) {

    return(
        <div>
            <input type = "text" value={newCat} onChange={ (e) => setNewCat(e.target.value) } placeholder="Enter cat name" />
            <button onClick={addCat}>Add Cat</button>

            <ul>
                {cats.map( (cat, index) => (
                    <li key= {index} > {cat} </li>
                ))}
            </ul>
        </div>
    )
}
export default CatAdoptList