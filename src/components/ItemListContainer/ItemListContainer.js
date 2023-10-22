import {useState,useEffect} from "react"
// import {getProducts, getProductByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"



const ItemListContainer = ({gretting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db,"products"),where("category", "==", categoryId))
            : collection(db,"products")

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
})



// Productos local
//--------------------------------------------------------------------------------------
    //     const asyncFunc = categoryId ? getProductByCategory : getProducts

    //     asyncFunc(categoryId)
    //         .then(response => {
    //             setProducts(response)
    //             // console.log(categoryId);
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [categoryId])
    
    // console.log(categoryId);



    return (
        <div>
            <h1>{gretting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer