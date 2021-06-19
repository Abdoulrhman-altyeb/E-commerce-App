import React,{useState} from 'react';

// components
import Products from './Components/Products';
import NavBar from './Components/NavBar';
import Sidebar from './Components/Sidebar';


const App = ()=> {
    const [show,setShow ]  = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const AddItem = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist) {
            setCartItems(cartItems.map((x) => (
                x.id === product.id ?  {...exist , count: exist.count + 1} : x
            )))
        }else {
            setCartItems([...cartItems, {...product, count:1}]);
        }
    }
    const RemoveItem = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
         if(exist.count === 1) {
            setCartItems(cartItems.filter((x) => (x.id !== product.id)))
        }else {
            setCartItems(cartItems.map((x) => (
                x.id === product.id ?  {...exist , count: exist.count - 1} : x
            )))
        }
    }
    return (
        <>
        <NavBar setShow={setShow} show={show} cartItems={cartItems.length}/>
        <Products AddItem={AddItem} />
        <Sidebar show={show} cartItems={cartItems} AddItem={AddItem} RemoveItem={RemoveItem}/>
        </>
    )
}


export default App;