import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currencies = () => {
    const {dispatch} = useContext(AppContext);
    const [isDropdownActive, setDropdownactive] = useState(false);
    const [currencyLabel, setCurrencyLabel] = useState(`£ Pound`);

    const changeCurrenciesHandler = (event) => {
        const currency = event.target.value;
        dispatch({
            type:'CHG_CURRENCY',
            payload:currency
        })
        setDropdownactive(!isDropdownActive)
        setCurrencyLabel(event.target.innerText)
    }

    return (
    <div className='alert alert-secondary'>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" onClick={()=>setDropdownactive(!isDropdownActive)}>
                Currency({currencyLabel})
            </button>

            <ul className="dropdown-menu" style={isDropdownActive? {display:"block"}:{display:"none"}}>
                <li><button value="£" name="pound" className="dropdown-item" onClick={(event) => changeCurrenciesHandler(event)}>£ Pound</button></li>
                <li><button value="$" name="dollar" className="dropdown-item" onClick={(event) => changeCurrenciesHandler(event)}>$ Dollar</button></li>
                <li><button value="€" name="euro" className="dropdown-item" onClick={(event) => changeCurrenciesHandler(event)}>€ Euro</button></li>
                <li><button value="₹" name="rupee" className="dropdown-item" onClick={(event) => changeCurrenciesHandler(event)}>₹ Rupee</button></li>
            </ul>
        </div>
    </div>
    );
};
export default Currencies;
