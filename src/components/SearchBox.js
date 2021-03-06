import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  console.log('Rendering searchbox');
  return (
    <div className='pa2'>
      <input className='pa3 ba b--green bg-lightest-blue'
             type='search'
             placeholder='search robots by name'
             onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;