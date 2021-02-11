import { useState, useEffect } from 'react';
import VideosData from '../Json/Server.json';

const useInitialState = () => {
    
    const [ videos, setVideos] = useState(VideosData);
    
    /*useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => SetVideos(data));

    }, []);*/

    return videos;
}

export default useInitialState;