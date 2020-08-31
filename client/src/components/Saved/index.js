import React, { Component } from 'react';
import SavedGallery from '../SavedGallery';

class SavedGlobal extends Component {
    state = {
        items: [],
        promiseIsResolved: false
    };

    loadSaved() {

    }
    render() {
        return (
            <div className="global">
                <SavedGallery items={this.state.items} />
            </div>)
    }
}

export default SavedGlobal;