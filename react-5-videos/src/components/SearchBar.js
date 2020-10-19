import React from 'react';

class SearchBar extends React.Component {
    state = { inputText: '' };

    onFormSubmit = event => {
        event.preventDefault();

        // get access to the function sent from the parent
        // in this case the parent set a prop the child calles onSearchBarFormSubmit
        this.props.onSearchBarFormSubmit(this.state.inputText);
    }

    render() {
        return(
         <div className="search-bar ui segment">
              {/* onSubmit is a especial react name function */}
             <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.inputText}
                    // onChange is a especial react name function
                    onChange={e => this.setState({ inputText: e.target.value })}
                    />
                </div>
             </form>
        </div>
        )
    }

}

export default SearchBar;