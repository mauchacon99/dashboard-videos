import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel   from '../components/Carousel';
import Item       from '../components/Item';
import Footer     from '../components/Footer';
import '../assets/styles/App.scss';
import VideosData from '../assets/Json/Server.json';

const App = () => { 
   
    const [ videos, setVideos] = useState(VideosData);

    return (
        <div className="app">
            <Header/>
            <Search/>
            {videos.mylist.length > 0 &&
                <Categories title="Mi Lista">
                <Carousel>
                    {videos.mylist.map(item =>
                         <Item key={item.id} {...item} />
                    )}
                </Carousel>    
            </Categories>
            }      
            
            <Categories title="Tendencia">
                <Carousel>
                    {videos.trends.map(item =>
                         <Item key={item.id} {...item} />
                    )}
                </Carousel>    
            </Categories>  
            <Categories title="Originales">
                <Carousel>
                    {videos.originals.map(item =>
                         <Item key={item.id} {...item} />
                    )}
                </Carousel>    
            </Categories>
            <Footer/>  
        </div>
    )
}

export default App;