import React from 'react';

import './Book.css';

const Book = ({ location }) => {
    const bookData = location.state;
    const authors = bookData.authors.join(", ");
    const categories = bookData.categories.join(", ");

    return (
        <div className="bookContainer">
            <div className="book">
                <div className="bookImg">
                    <img width={250} height={400} src={bookData.imageLinks.thumbnail} alt="No image" />
                </div>
                <div className="bookInfo">
                    <h2><b>Authors:</b> {authors}</h2>
                    <h3><b>Title:</b> {bookData.title}</h3>
                    <p><b>Description:</b> {bookData.description}</p>
                </div>
            </div>
            <div className="otherInfo">
                <p>
                    <b>Categories:</b> {categories}
                    <br />
                    <b>Language:</b> {bookData.language}
                    <br />
                    <b> Published date </b>: {bookData.publishedDate}
                    <br />
                    <b>Subtitle:</b> {bookData.subtitle}
                    <br />
                    <a className="aTag" href={bookData.previewLink}>Click here for more info </a>
                </p>
            </div>
        </div>
    );
};

export default Book;