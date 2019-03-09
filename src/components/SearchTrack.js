import React, { Component } from 'react';

class SearchTrack extends Component {
    render() {
        return (
            <div className="search container-fluid">
                <div className="row">
                    <div className="col-9 border border-danger">
                        Search Result
                    </div>
                    <div className="col-3 border border-danger">
                        Recommended Tracks
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchTrack;