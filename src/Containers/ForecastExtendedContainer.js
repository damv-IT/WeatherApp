import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ForecastExtended from '../Components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const {city} = this.props;
        return city && <ForecastExtended city={city}/>;
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps,null)(ForecastExtendedContainer);