import { useState } from 'react';
import { data } from './data';


function Cities() {

    const [cities, setCities] = useState(data);
    const [showText, setShowText] = useState(false);

    const removeCities = (id) => {
        let newCities=cities.filter(city => city.id !== id);
        setCities(newCities);
    }

    const showTextClick= (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return (
        <div>
            {cities.map ((item => {
                const { id, name, description, image, showMore} = item;

                return (
                    <div key = {id}>
                        <div className = 'container'>
                            <h2>{id} - {name}</h2>
                            </div>
                        <div className = 'container'>
                            <p className = 'par'>{showMore ? description : description.substring(0, 100) + '...'}
                            <button className = 'btnTwo' onClick = {() => showTextClick(item)}>{!showMore ? 'показать больше' : 'показать меньше'}</button>
                            </p>
                            </div>
                            <div className = 'container'>
                                <img src={ image } alt='img' width = '400px' />
                                </div>
                                <br />
                                <div className = 'container'>
                                    <button className = 'btn' onClick = {() => removeCities(id)}>Удалить </button>
                                    </div>
                                    <hr />
                    </div>
                )
            }))}
            <br />
            <div class = 'container'>
            <button className = 'btn' onClick = {() => setCities([])}>Удалить все</button>
            </div>

        </div>
    )
}

export default Cities