import {useState,useEffect} from 'react';
import Categories from './categories';
import Products from './products';
import ProductCard from './ProductCards';
import './App.css';

const App = () =>{
    const [catTitle,setCatTitle] = useState('');
    const [products,setProducts] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const [catID,setCatID] = useState('');
    useEffect(()=>{
        setCatID(Categories[0].id);
        setCatTitle(Categories[0].description);
        setProducts(Products.filter((elem)=>{
            return elem.categories.includes(Categories[0].id) && !elem.discounted;
        }));
    },[]);
    return(
        <div className='app'>
            <header>
                <h1>Game Go</h1>
                <p>Online Video Game Store</p>
            </header>
            <nav className='categories-menu'>
                {Categories.map((cat)=>(
                    <button onClick={()=>{
                        setCatID(cat.id);
                        setCatTitle(cat.description);
                        setProducts(Products.filter((elem)=>{
                            return elem.categories.includes(cat.id) && !elem.discounted;
                        }));
                    }}>
                        {cat.description}
                    </button>
                ))}
            </nav>
            <main>
                <div className='search'>
                    <h3>Search</h3>
                    <input placeholder='Search a game then Enter' 
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    onKeyDown={e=>{
                        if(e.key === 'Enter'){
                            setProducts(Products.filter((elem)=>{
                                return elem.name.toUpperCase().includes(searchTerm.toUpperCase()) 
                                && elem.categories.includes(catID) 
                                && !elem.discounted;
                            }));
                        }
                    }}>
                    </input>
                </div>
            <h2 className='category'>
                {catTitle}
            </h2>
            {
                <div className='cards'>
                    {products.map((product)=>(
                        <ProductCard products = {product}/>
                    ))}
                </div>
            }
            </main>
            <hr/>
        </div>
    );
}

export default App;