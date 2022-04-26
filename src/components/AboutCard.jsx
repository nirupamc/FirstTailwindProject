import React from 'react'

function AboutCard(props) {
  return (
    <div className=' flex-col text-left border rounded-2xl py-12 px-8'>
                    <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                        {props.icon}
                    </div>
                    <h3 className='text-xl font-bold py-4'> {props.title}</h3>
                    <p> {props.text}</p>
                        

                    </div>
  )
}

export default AboutCard