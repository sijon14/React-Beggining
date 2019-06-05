import React, { Component } from "react";

export default class Book extends Component {
  //constructor runs everytime the clas is instianated
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      showInfo: false
    };

    //to bind the handle click method to the class
    //<<---binding handleClick() method ------------>>
    // this.handleClick = this.handleClick.bind(this);
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  //creating method for button click
  //<<-----------method ------------>>
  //method without ARROW function must be
  // handleClick() {
  //   console.log("you clicked me");
  //   console.log(this.state.count);
  // }

  // => ARROW function : handle method works without binding
  //because ARROW function by their own do not create their own context

  render() {
    //<<---------acessing props from the data ------>>
    const { id, img, title, author } = this.props.info;
    //<<------ACCESSING main props and getting the METHODS out------->>
    const { deleteItem } = this.props;

    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            <h7>
              This is the information about the book, and the information on
              this book is not that great.
            </h7>
          </p>
        );
      } else {
        return null;
      }
    };
    return (
      // giving value
      <div className="book">
        <img src={img} width="150px" alt="book" className="img" />

        <div>
          <h4>{title}</h4>
          <h6>By: {author}</h6>
          <button onClick={() => deleteItem(id)} className="btn1">
            Delete Item
          </button>
          <button onClick={this.handleInfo} className="btn1">
            Show info
          </button>
          {/* //METHOD ONE conditional JSX!!!!!!ternary operator  */}
          {/* {this.state.showInfo ? (
            <p>
              This is the information about the book, and the information on
              this book is not that great.
            </p>
          ) : null} */}
          {/* //METHOD TWO!!conditional JSX!!boolean operator */}
          {/* {this.state.showInfo && (
            <p>
              This is the information about the book, and the information on
              this book is not that great.
            </p>
          )} */}
          {/* //Method 3!!!!conditional JSX!!! */}
          {checkInfo(this.state.showInfo)}
          {/* 
<<<-----METHOD 2---->>>
 <button onClick={deleteItem}>Delete Item</button> */}
        </div>
      </div>
    );
  }
}

// <button onClick={() => deleteItem(id)}>Delete Item</button>
// initially we were passing refrence now we are passing id within the arrow function! to return it rather than refrence it

//conditional in JSX
// {if {true}}
