import React from 'react';
import data from './../../data/data.json';


class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    componentDidMount() {
        // fetch(`../../../../dist/scripts/data.json`)
        //     .then(result => result)
        //     .then(items => this.setState({ items }))
    }

    render() {
        const { data } = this.state;
        const rows = (
            data.items.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{}DLX</td>
                    <td>{item.state}</td>
                    <td>{item.messages_ready}</td>
                    <td>{item.messages_unacknowledged}</td>
                    <td>{item.messages}</td>
                    <td>{}/s</td>
                    <td>{}/s</td>
                    <td>{}/s</td>
                </tr>
            )))
        return (
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td className="text-center" colSpan='3'>Overview</td>
                            <td className="text-center" colSpan='3'>Messages</td>
                            <td className="text-center" colSpan='3'>Message rates</td>

                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Features</td>
                            <td>State</td>
                            <td>Ready</td>
                            <td>Unacked</td>
                            <td>Total</td>
                            <td>Incoming</td>
                            <td>Deliver/Get</td>
                            <td>ack</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DashboardPage;