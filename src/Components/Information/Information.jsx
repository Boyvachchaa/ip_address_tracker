import React, { Component } from 'react';
import './Information.scss';

class Information extends Component {
    render() {
        const { ip, isp, timezone, location, country,showRes } = this.props;

        return (
            
            <div className='container'>
                {showRes ? 
                    <div className="card_items">
                        <div className="main_section ">
                            <div className="full_info ">
                                <div className="ip_address">
                                    <p>IP Address</p>
                                    <h4>{ip}</h4>
                                </div>
                                <div className="line"></div>
                                <div className="location">
                                    <p>Location</p>
                                    <h4>{location} {country}</h4>
                                </div>
                                <div className="line"></div>
                                <div className="timezone">
                                    <p>Timezone</p>
                                    <h4>{timezone}</h4>
                                </div>
                                <div className="line"></div>
                                <div className="isp">
                                    <p>ISP</p>
                                    <h4>{isp}</h4>
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                    :
                    null
                }
            </div>
            
        );
    }
}

export default Information;
