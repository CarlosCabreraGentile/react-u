import React from 'react';

class SearchBar extends React.Component {
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
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        ) 
    }
}

export default SearchBar;