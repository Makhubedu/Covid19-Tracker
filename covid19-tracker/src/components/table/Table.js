import React from 'react'
import './table.css'

function Table({countries}) {
    return (
        <div className="table">
                {countries.map( (country,index) =>(
                    <tr key={index}>
                        <td> {country.country}</td>
                        <td><strong>{country.cases}</strong></td>   
                    </tr>   
                ) )}
            
        </div>
    )
}

export default Table