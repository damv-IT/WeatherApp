import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LocationList from '../Components/WeatherLocation/LocationList';
import {setCity} from '../Actions';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity(city);
    }
    
    render() {
        const {cities} = this.props;

        return (
            <div>
                <LocationList
                    cities={cities}
                    onSelectedLocation={this.handleSelectionLocation}/>
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    cities: PropTypes.array.isRequired,
    setCity: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
    setCity: payload => dispatch(setCity(payload))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);