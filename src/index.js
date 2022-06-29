import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Book from "./Book"

import {books} from './books'

function BookList() {
  return (
  <section
    className="booklist">
    {books.map((book, index) => {
      return <Book
        key={book.id}
        {...book}></Book>
    })}
  </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
