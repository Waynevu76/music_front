import React, { Component } from 'react';

class FeelingQuestion extends Component {
    render() {
        return (
            <div className='question'>
                <button className="btn btn-1 feeling">Happy </button>
                <button className="btn btn-2 feeling">Funny </button>
                <button className="btn btn-3 feeling">Sad </button> 
                <button className="btn btn-4 feeling">seven love </button> 
                <button className="btn btn-5 feeling">stress </button>
            </div>
    );
  }
}

export default FeelingQuestion;