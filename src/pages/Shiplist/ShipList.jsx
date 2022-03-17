import { useEffect, useState } from 'react'
import { getShipList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const ShipList = (props) => {
  const [ships, setShips] = useState([])

  useEffect(()=> {
    getShipList()
    .then(shipData => setShips(shipData.results))
  }, [])

  return (
    <>
      <div>
        <div className='icon-container'>
          {ships.map((shipName) => (
            <Link className='link' to='/ship' state={{shipName}} key={shipName.name}>
              <div id="classDiv" >
                {shipName.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShipList;