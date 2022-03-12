import { useState } from 'react';
import { dataTwo } from './dataTwo';


function CitiesRus() {
    const [cities, setCities] = useState(0);
    const {idTwo, imageTwo, nameTwo} = dataTwo[cities];

    const previousCities = () => {
        setCities (( cities => {
            cities --;
            if (cities < 0) {
                return dataTwo.length - 1;
            }
            return cities;
        }))
    }

    const nextCities = () => {
        setCities (( cities => {
            cities ++;
            if (cities > dataTwo.length -1) {
                cities = 0;
            }
            return cities;
        }))
    }

    return (
        <div>


        <div className = 'main'>
 <button className = 'btnTwo' onClick = {previousCities}>Назад</button>
        <div className = 'cont'>
            <img src = {imageTwo} alt = 'rus' width= '300px' height='300px' />

    <h3>{idTwo} - {nameTwo}</h3>
</div>

<button className = 'btnTwo' onClick = {nextCities}>Вперед</button>
</div>

</div>
    )
}

export default CitiesRus