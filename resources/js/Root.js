import React from 'react';
import ReactDOM from 'react-dom';
import Route from "./routes"

function Root() {
    return (
        <Route />
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
