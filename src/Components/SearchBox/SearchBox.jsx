import React, { useState } from 'react';
import { connect } from 'react-redux';

import requestShowAction from '../../redux/show/showActions';
import './SearchBox.scss'

const SearchBox = ({requestShow}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = event => {
    const {target: {value}} = event
    setSearchTerm(value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm) requestShow(searchTerm)
  }

  return(
  <div className="search">
    <form onSubmit={handleSubmit}>
      <div>
      <input type="search" placeholder="Enter a show title" onChange={handleChange} value={searchTerm}/>
      </div>
      <div>
        <input type="submit" value="Search"/>
      </div>
    </form>
  </div>
)}

const mapDispatchToProps = {
  requestShow: requestShowAction
};

export default connect(null, mapDispatchToProps)(SearchBox);
