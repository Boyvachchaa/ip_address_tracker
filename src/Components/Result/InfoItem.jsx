import React, { Component } from 'react';
import Information from '../Information/Information';
class InfoItem extends Component {
    render() {
        const {result,showRes} = this.props
        return (
            <div>
                <Information 
                    showRes={showRes}
                    ip={result?.ip}
                    isp={result?.isp}
                    timezone={result?.location.timezone}
                    location={result?.location.region}
                    country={result?.location.country}
                />
            </div>
        );
    }
}

export default InfoItem;