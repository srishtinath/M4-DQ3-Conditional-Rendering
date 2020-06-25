import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    active: "profile"
  }

  handleClick = (event) => {
    this.setState({
      active: event.target.id
    })
    console.log(event.target.id)
  }


  render() {
    const detailsToDisplay = () => {
      if (this.state.active === "profile") {
        return <Profile />
      } else if (this.state.active === "photo") {
        return <Photos />
      } else if (this.state.active === "cocktail") {
        return <Cocktails />
      } else if (this.state.active === "pokemon") {
        return <Pokemon />
      }
    }

    return (
      <div onClick={this.handleClick}>
        <MenuBar active={this.state.active}/>
        {detailsToDisplay()}
        {/* {console.log(this.state)} */}
      </div>
    )
  }

}

export default MainBox
