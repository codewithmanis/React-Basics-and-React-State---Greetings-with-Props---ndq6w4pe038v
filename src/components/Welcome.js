// write code for Welcome component here
import React from 'react'

function Welcome(props) {
  return (<h1>"Hey !" {props.name}<h2>{props.children}</h2></h1>)
}
export default Welcome
