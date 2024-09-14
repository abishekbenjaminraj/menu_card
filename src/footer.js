import './footer.css'
import React from 'react';


var currentTime = new Date();
var startDate = currentTime.getHours();

    
var a=(startDate >= 12 && startDate <= 22) ? "We are open" : "We are closed";
const Footer=()=>{
    
    return(<div>
        <p id='status'>{a}</p>
        <button>Order</button>
    </div>)
}

export default Footer