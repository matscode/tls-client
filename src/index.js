import React            from 'react';
import ReactDOM         from 'react-dom';
import RoutesEntry      from './RoutesEntry';

class TLSignalClient extends React.Component {

    render () {

        return (
            <RoutesEntry />
        );
    }
}

ReactDOM.render(
    <TLSignalClient />,
    document.getElementById('root')
);
