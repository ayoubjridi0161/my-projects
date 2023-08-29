import React from 'react'

export const layout = () => {
  return (
    <div>layout</div>
  )
}
const Navi1 = () =>
{
    return (
        <nav className='flex justify-between p-2'>
            <h1>
                ProLoad
            </h1>
            <div className='flex '>
                <a className='mx-2'>Log in</a>
                <a className='mx-2'>Sign up</a>
            </div>
        </nav>
    )
}
export default Navi1
