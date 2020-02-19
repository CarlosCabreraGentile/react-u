import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    // option 1, create this function linked to input
    onInputChange(event) {
        console.log(event.target.value);
    }

    // option 2 write the function inside de input
    //<input type="text" onChange={ (e) => console.log(e.target.value) } />

    // must implement this method
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={ e=> this.setState({term: e.target.value}) } />
                    </div>
                </form>
            </div>
        ) 
    }
}

export default SearchBar;