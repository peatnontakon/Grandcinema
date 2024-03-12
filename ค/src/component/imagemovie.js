import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'antd';
const { createRoot } = ReactDOM;

// Define mountNode
const mountNode = document.getElementById('root'); // Replace 'root' with the actual ID of the root element in your HTML

const App = () => (
    <React.Fragment>
        <Image
            Border='2px solid #000'
            width={200}
            src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg"
        />
    </React.Fragment>
);

const Imagemovie = App;

createRoot(mountNode).render(<Imagemovie />);

export default Imagemovie;

