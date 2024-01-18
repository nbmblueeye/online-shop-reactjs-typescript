import React, { useEffect, useState } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

const SearchTool = () => {

  const navigation = useNavigate();
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery('');
    }
  },[location.pathname]);

  const searhQueryHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!query){
      return false;
    }else{
      navigation({
        pathname: '/search',
        search: `?${createSearchParams({s:query})}`
      })
    }
  }

  return (
      <form className="search-form" onSubmit={(e) => searhQueryHandler(e)}>
        <input type="text" className="search-input" id="search-input" name="s" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="search-button" type="submit">Search</button>
      </form>
  )
  
}

export default SearchTool
