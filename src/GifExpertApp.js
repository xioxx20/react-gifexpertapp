import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

const GifExpertApp= () => {
    //const categories= ['Orphan Black', 'Haunting of Bly Manor', 'Gambit Queen'];
    const [categories, setCategories] = useState(['Orphan Black'])

    /*const handleAdd= () => {
        setCategories([...categories, 'Friends']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories= {setCategories}
            />
            <hr />

           <ol>
               {
                   categories.map( category => (
                        <GifGrid
                            key= { category }
                            category= { category }
                        />
                   ))
               }
           </ol>
        </>

    );
}

export default GifExpertApp;