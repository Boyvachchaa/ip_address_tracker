import React, { Component } from 'react';
import searchIcon from './assets/for-search.svg'
import './App.scss'
import InfoItem from './Components/Result/InfoItem';
import Map from './Components/Map/Map'
import loadingImg from './assets/loader.svg'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      result: null,
      showRes: false,
      err: '',
      loader: false
    }
  }

  handleSearch = async () => {
    
    this.setState({ loader: true })

    try {
      const getData = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_zlBPDQZ8m6RBfBA1zxlYtOKjzdSYu&${isNaN(this.state.searchValue) ? 'domain' : 'ipAddress'}=${this.state.searchValue}`);
      const data = await getData.json();

      if(!this.state.searchValue.trim()) {
        this.setState({ err: 'Input To`ldirilmadi', showRes: false, result:null, loader:false })
      } else if(data.messages) {
        this.setState({ showRes: false, err: 'Ip yoki Domain xato kiritildi', result: null, loader: false })
      } else {
        this.setState({ showRes: true, result: data, err: '', loader:false })
      }
      console.log(data)
    } catch(err) {
      console.log(err);
      this.setState({ showRes: false, err: 'An error occurred during the fetch.' });
    }
  };
  

  
  render() {
    const { result, showRes } = this.state
    return (
      <div>

        <header>
            <div className="header_items container">
              <h1>IP Address Tracker</h1>
              <div className="search_area">
                  <form name='wordSearch' onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="search"
                        placeholder='Search for any IP address or domain'
                        value={this.state.searchValue}
                        onChange={(e) => this.setState({ searchValue: e.target.value })}
                    />
                    <button
                      onClick={this.handleSearch}
                    >
                      <img src={searchIcon} alt="Search Icon" />
                    </button>
                  </form>
                  <p className='error'>{this.state.err}</p>
              </div>
            </div>
        </header>

        {this.state.loader && (
          <div className="loader">
            <img src={loadingImg} alt="" />
          </div>
        )}

        {showRes && !this.state.loader ? (
          <div className="full_info">
            <InfoItem showRes={showRes} result={result} />
            <Map />
          </div>
        ) : null}


      </div>
    );
  }
}

export default App;