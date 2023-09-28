import {useState,useEffect} from "react"
import {getProducts, getProductByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({gretting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
                console.log(categoryId);
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    
    console.log(categoryId);



    return (
        <div>
            <h1>{gretting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer