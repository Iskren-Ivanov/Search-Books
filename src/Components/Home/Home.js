import React from 'react';
import './Home.css';

const Home = () => (
    <div className="homeContainer">
        <div className="primary">
            <h1 className="display-4">Lorem Ipsum</h1>
            <h3 className="display-6">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</h3>
            <hr />
            <p>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            <p>
                <a className="btn btn-secondary btn-lg" href="https://www.lipsum.com/" role="button">Learn more</a>
            </p>
            <footer>
                <p>All rights reversed &copy; 1900-3400 </p>
            </footer>
        </div>
    </div>
);

export default Home