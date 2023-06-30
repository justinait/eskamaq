import React, { useEffect, useState } from 'react'
import db from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Brands from '../Brands/Brands';

function BrandsContainer() {
    
  const [listBrands, setListBrands] = useState([])
  const { brand } = useParams();

    const getBrands = async () => {
        const brandsCollection = collection(db, 'brands')
        const brandsSnapshot = await getDocs(brandsCollection)

        const brandsList = brandsSnapshot.docs.map( (e) => {
        let eachItem = e.data();
        eachItem.id = e.id;

        return eachItem;
        })

        if(brand){

            let brandItems = brandsList.filter( (e) => {
                return e.id == brand
            })
            
            brandItems.map(e => {        
                return e        
            })
            
            let array = Object.values(brandItems)
            // console.log(array)     contiene objetitos

            return array
        }

    }

    useEffect(() => {
        
        getBrands()
        .then( (res) => { 
            setListBrands(res)
        })
    }, [brand])

    return(
        <div>
            <Brands brandsArray={listBrands}/>
        </div>
    )
}

export default BrandsContainer