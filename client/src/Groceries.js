import { useState } from 'react';
import axios from 'axios';

const Groceries = function() {
    const [foodName, setFoodName] = useState("");
    const [expirationDate, setExpirationDate] = useState(Date.now);

    function addGrocery(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/addGrocery", {foodName, expirationDate})
    }

    return (
	<div id="wrapper">
	    <form onSubmit={addGrocery}>
            <label for="foodName">Food Name:</label>
            <input type="input" 
                value={foodName} onChange = {(e) => setFoodName(e.target.value)}
                name="foodName" id="foodName" />
            <br/>
			<br/>
            <label for="expirationDate">Expiration Date:</label>
            <input type="date" 
                value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} 
                name="expirationDate" id="expirationDate" />
            <br/>
			<br/>
            <input type="submit" value="Add Grocery" />
        </form>
	</div>
  );
}

export default Groceries;