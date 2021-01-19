import {useState, useEffect} from 'react';
import { getGifs } from '../components/helpers/getGifs';

export const useFetchGifs = ( category ) =>{
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Esta instrucción se ejecuta solamente cuando el componente es renderizado por primera vez, utilizando el hook useEffect
    useEffect( () =>{
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state; //(data: [], loading: true);
}