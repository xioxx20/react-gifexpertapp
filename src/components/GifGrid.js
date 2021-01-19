import React from 'react'
import {GifGridItem} from './GifGridItem'; 
import {useFetchGifs} from '../hooks/useFetchGifs';

//import { getGifs } from './helpers/getGifs';

export function GifGrid( {category} ) {
  
    //Llamado del custom hook que obtiene las imagenes
    const { data: imgs, loading }= useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando....' : ''}
            <div className="card-grid">
            
                {
                    imgs.map(img => (
                        <GifGridItem 
                            key= {img.id}
                            {...img}
                        />
                    ))
                }
            </div> 
        </>
    )
}
