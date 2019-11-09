import React from 'react';

const blue = { fontSize: '100px', color: 'white' };
class FancyComponent extends React.Component {
    render() {
        return (
            <div style={blue}>Fancy</div>
        );
    }
}

export default FancyComponent;