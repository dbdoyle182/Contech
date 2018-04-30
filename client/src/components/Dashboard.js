import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

// We can delete this page once it is no longer necessary
const Dashboard = ({ secretData }) => (
    <Card className="container">
        <CardTitle
        title="Dashboard"
        subtitle="You should get access to this page only after authentication."
        />

        {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
    </Card>
);

Dashboard.propTypes = {
    secretData: PropTypes.string.isRequired
}

export default Dashboard;