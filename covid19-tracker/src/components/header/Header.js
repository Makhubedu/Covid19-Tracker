import React, {useState} from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) =>{
    const [country, setCountry] = useState("Worldwide")
    const handleChange = (event) =>{
        console.log(event.target.value)
    }

    return(
        <div>
        <header className="header">
        <div className="header__title">
            <h1>Covid19 STATUS</h1>
        </div>
        <div className="header__select ">
            <form >
                <select className="form-control" name="" onChange={handleChange}>
                    <option value={country}>Worldwide</option>
                    {props.country.map( (countryData, index) =>(
                        <option key={index} value={countryData.value}>{countryData.name}</option>
                    ))}
                </select>
            </form>
        </div>
          
        </header>
        
        </div>

    )
}

export default App;
