import React from 'react'


function MenuBar(props) {

  let handleClass = (e) => {
    console.log(e.target.id)
    console.log(props.active)

    if (e.target.id) {
      e.target.className = "item active"
    } else {
      e.target.className = "item"
    }
  }

  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={handleClass}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo" onClick={handleClass}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="cocktail" onClick={handleClass}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon" onClick={handleClass}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>

    </div>
  )

}

export default MenuBar
