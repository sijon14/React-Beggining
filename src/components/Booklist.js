import React, { Component } from "react";
import Book from "./Book";
import books from "./data";

export default class Booklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: books
    };
  }

  //state ={
  //books: booksData
  //};
  //initializing state
  //this.setState({})

  //we can pass this method and we do it in the .map function and on books

  //HERE we are sorting FILTERDATA then setting new state to be Filtered//sortedBooks
  //Filter here returns a new array without the 'item that was passed'
  filterData = id => {
    console.log(id);

    const sortedBooks = this.state.books.filter(item => item.id !== id);
    this.setState({
      books: sortedBooks
    });
  };

  render() {
    //using .map to return book value
    //.map(item => what we are returning)
    // const example = this.state.books.map(item => <p>{item.book}</p>);
    return (
      <div>
        <h2>Best selling books this week</h2>
        {this.state.books.map(book => (
          <Book key={book.id} info={book} deleteItem={this.filterData} />
        ))}
        {/* 
        <<<-----METHOD 2---->>>
        {this.state.books.map(book => (
          <Book key={book.id} info={book} deleteItem={()=> this.filterData(book.id)} />
        ))} */}
      </div>
    );
  }
}

//<Book key={book.id} info={book} deleteItem={filterData} />
// here info & deleteItem are props.....
