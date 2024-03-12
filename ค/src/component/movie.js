import React, { useState, useEffect } from 'react';
import { Button, Card } from 'antd';
import './movie.css';
import Imagemovie from './imagemovie';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from Strapi API
        fetch('http://localhost:1337/api/movies')
            .then(response => response.json())
            .then(data => {
                console.log('Data from API:', data);
                // Check the structure of the data
                if (data && Array.isArray(data.data)) {
                    // Use the data.data array
                    setMovies(data.data);
                } else {
                    console.error('Unexpected data structure:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    return (
        <Card>
            <div className='movielist grid grid-cols-2 gap-28'>
                {movies.map(movie => (
                    <div key={movie.id} className='gap-4'>
                        <div className='rounded-lg'>
                            <p>SHOWTIME</p>
                            <Imagemovie />
                        </div>
                        {/* Render the image here */}
                        <div className=''>
                            <button className='bg-stone-200 rounded-lg w-40'>ชื่อเรื่อง: {movie.attributes.title}</button>
                            <Button className='bg-rose-600 text-white'>ชมภาพยนตร์</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default MovieList;
