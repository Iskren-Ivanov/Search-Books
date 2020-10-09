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
        getBooks(props.location.searchState ? props.location.searchState : '');
    }, [props.location.searchState]);

    const getBooks = async (search) => {
        let data = [];
        const url = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=${search}`;
        if (search.trim() !== '') {
            setLoading(true);
            await axios.get(url)
                .then(response => {
                    response.data.items.forEach(d => data.push(d.volumeInfo));
                })
                .catch(error => {
                    setLoading(false);
                    NotificationManager.warning('There was a problem loading', 'Error', 3000);
                }).finally(() => {
                    setLoading(false);
                });
            setBooksData(data);
        };
    };

    const BookClick = (bookData) => {
        history.push({
            pathname: '/book',
            state: bookData
        });
    }

    return loading ? <Loader />
        :
        (<div className="booksContainer">
            <table className="table table-hover dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {booksData.length > 0 ? booksData.map(b => {
                        let authors;
                        b.authors?.length > 0 ? authors = b.authors.join(", ") : authors = b.authors
                        return (
                            <tr onClick={() => BookClick(b)}>
                                <th scope="row">{bookNumber++}</th>
                                <td>{b.title}</td>
                                <td>{authors}</td>
                                <td>{b.averageRating}</td>
                            </tr>
                        )
                    }) : null
                    }
                </tbody>
            </table>
        </div >
        );
};

export default Books;