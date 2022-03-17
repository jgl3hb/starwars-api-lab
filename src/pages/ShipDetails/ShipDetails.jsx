import { useState, useEffect } from 'react';
import { getDetails } from '../../services/api-calls'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

const ShipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.shipName.url)
    .then(shipDetails => setShipDetails(shipDetails))
  },[])

  return ( 
    <>
    <div className= 'ship-container'></div>
      {shipDetails.name ?
    <div className='ship-details'>
      <p>Name: {shipDetails.name}</p>
      <p>Model: {shipDetails.model}</p>
      <Link className='link' to='/'>Return</Link>
    </div>  
    :
    <h2>
      Loading Ship Details...
    </h2>
}
    </>
  );
}

export default ShipDetails;