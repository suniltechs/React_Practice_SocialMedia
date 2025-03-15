import React from 'react'

const Footer = () => {
  const year = new Date()
  return (
    <footer className='Footer'>CopyWrite © {year.getFullYear()}</footer>
  )
}

export default Footer