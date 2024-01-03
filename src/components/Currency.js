import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    }

    return (
        <div>
            <div class="row">
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label style={{ backgroundColor: '#ebebeb', height: '100%', border: 'none', marginLeft: '0px', fontSize: '115%' }} className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                    </div>
                    <select style={{ backgroundColor: '#ebebeb', border: 'none', width: '50%', height: '130%' }} class="form-select form-select-lg" id="inputGroupSelect02" onChange={handleCurrencyChange}>
                        <option value="$" name="$">$ Dollar</option>
                        <option value="£" name="£">£ Pound</option>
                        <option value="€" name="€">€ Euro</option>
                        <option value="₹" name="₹">₹ Ruppee</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
export default Currency;