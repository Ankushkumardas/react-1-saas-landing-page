import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-center mt-8 mb-8'>
      <p>
        &copy; {new Date().getFullYear()} Ankush. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
