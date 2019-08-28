import React from 'react';

class SearchBar extends React.Component{

    state = {term:''}

    // prevents default submit when enter key is pressed
    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
        <div onSubmit={this.onFormSubmit} className="ui segment">
            <form className="ui form">
                <label>Image Search</label>
                <input 
                    type="text" 
                    className="field" 
                    value={this.state.term}
                    placeholder="enter text"
                    onChange={(e)=> this.setState({term:e.target.value})}
                />
            </form>
        </div>
        );   
    }
}

export default SearchBar;