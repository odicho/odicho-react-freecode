import React from 'react'

const Book = ({ img, title, author }) => {
    // const { img, title, author } = props.book;
    // attribute, eventHandler
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello World');
    }

    const complexButton = (author) => {
        console.log(author);
    }
    return (
        <article className="book" onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Sadi</button>
            <button type="button" onClick={() => complexButton(author)}>more complex</button>
        </article>
    );
}

export default Book;