import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const RenderToDOM = () => {
    ReactDOM.render(<App />,document.getElementById('root') || document.createElement('div'))
}

RenderToDOM()

export { RenderToDOM }
