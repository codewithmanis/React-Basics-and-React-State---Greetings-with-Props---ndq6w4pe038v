// write code for Welcome component here
import React from 'react'

function Welcome(props) {
  return (<div>
          <h1>"Hey !" where name is name of the student ?</h1>
          <h2>{props.name}"Welcome to Newton School."</h2>
          </div>)
}
export default Welcome
