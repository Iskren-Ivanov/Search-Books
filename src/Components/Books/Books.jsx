import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import Loader from '../loader/loader';

import './Books.css';

const Books = (props) => {
    let history = useHistory();

    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(false);

    let bookNumber = 1;

    useEffect(() => {
        getBooks(props.location.searchState ? props.location.searchState : localStorage.getItem('search'));

        window.setTimeout(() => { localStorage.removeItem('search') }, 100000);
    }, [props.location.searchState]);

    const getBooks = async (search) => {
        let data = [];
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
       
        if (search && search.trim() !== '') {
            localStorage.setItem('search', search);
            setLoading(true);
            await axios.get(url)
                .then(response => {
                    response.data.items.forEach(d => data.push(d.volumeInfo));
                })
                .catch(error => {
                    NotificationManager.warning('There was a problem loading', 'Error', 3000);
                }).finally(() => {
                    setLoading(false);
                });
            setBooksData(data);
        };
    };

    const bookClick = (bookData) => {
        history.push({
            pathname: '/book',
            state: bookData
        });
    };

    return loading ? <Loader />
        :
        (<div className="booksContainer">
            <table className="table table-hover dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {booksData.length > 0 ? booksData.map(b => {
                        let authors;
                        b.authors?.length > 0 ? authors = b.authors.join(", ") : authors = b.authors
                        return (
                            <tr key={b.pageCount} onClick={() => bookClick(b)}>
                                <td>{bookNumber++}</td>
                                <td>{authors}</td>
                                <td>{b.averageRating}</td>
                                <td>{b.title}</td>
                            </tr>
                        );
                    }) : null}
                </tbody>
            </table>
        </div >);
};

export default Books;