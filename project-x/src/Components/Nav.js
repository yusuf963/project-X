import React from 'react';
import { useState } from 'react'

const Nav = () => {
  return (
    <nav>
      <img className="logo" alt="logo" />
      <ul>
        <li>Qoute API</li>
        <li>Joke API</li>
        <li>about</li>
      </ul>
    </nav>
  )
}

export default Nav