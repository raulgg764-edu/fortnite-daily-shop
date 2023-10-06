import { useEffect, useState } from "react";
import {shop, currentRotation} from "../mocks/fortnite-shop.json"

export function useStore(){

    const [loading, setLoading]=useState(false);
    const [updateStore, setUpdateStore]=useState({});
    const [updateRotation, setUpdateRotation]=useState({});

    useEffect(()=>{
        fetchProducts();
    },[]);

    const fetchProducts= async ()=>{
        
        try{
            setLoading(true);
            /*const data = await fetch('https://fortniteapi.io/v2/shop?lang=en',{headers:{'Authorization':'bd754f4c-ffaf2970-866589c7-70abedf7'}}).
            then(res=>res.json());*/
            const data = await {shop, currentRotation};
            setUpdateStore(data.shop);
            setUpdateRotation(data.currentRotation);
        } catch(error){
            setLoading(false);
            throw new Error(error);
        } finally{
            setLoading(false);
        }
        
        
    }

    return [updateRotation, updateStore,loading];
} 