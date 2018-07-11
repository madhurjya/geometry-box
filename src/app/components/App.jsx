import React from 'react';
import DashboardPage from './Dashboard/DashboardPage.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <DashboardPage />
            </div >
        );
    }
}

export default App;