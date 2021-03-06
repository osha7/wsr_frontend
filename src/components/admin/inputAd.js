import React from 'react';
import {connect} from 'react-redux';
import {addAd} from '../../actions/addAd';



class AdInput extends React.Component {

  state = {
    ad: {
      name: '',
      company: '',
      link: '',
      image: {},
    }
    }
  
  handleAdChange = (event) => {
    let ad = {...this.state.ad}
    let currentState = ad
    let {name, value} = event.target 
    currentState[name] = value
    this.setState({
      ad: currentState
    })
  }

  handleImageChange = (event) => {
    let ad = {...this.state.ad}
    let currentState = ad
    currentState["image"] = event.target.files[0]
    this.setState({
      ad: currentState
    })
  }

 

  handleAdSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAddAd(this.state.ad)
    this.setState({
      ad: {
        title: '',
        company: '',
        link: '',
        image: {},
      }
    })
  }
  

  render(){

    
      return (
        <div className="adInput">
          <h1>Upload New Ad</h1>
          <form onSubmit={this.handleAdSubmit} >
            <div className="adForm">
              <label>Name</label>
              <input onChange={this.handleAdChange} type="text" value={this.state.ad.title} name="title" />
            </div>
            <div className="adForm">
              <label>Company</label>
              <input onChange={this.handleAdChange} type="text" value={this.state.ad.company} name="company" />
            </div>
            <div className="adForm">
              <label>Link</label>
              <input onChange={this.handleAdChange} type="url" value={this.state.ad.link} name="link" />
            </div>
            
            <div className="adForm">
              <label>Image</label>
              <input id="files-upload" type="file" name="image" accept="image/*" onChange={this.handleImageChange} />
            </div> 
             

          

            <button type="submit">Submit</button>
          </form>
        </div>
      ) 
  }
}

function mSTP(state){
  return {
    ads: state.ads
  }
}

function mDTP(dispatch){
  return {
    dispatchAddAd: (ad) => dispatch(addAd(ad)),
    dispatchAddImage: (formData) => dispatch(addAd(formData))
  }
}


export default connect(mSTP, mDTP)(AdInput)