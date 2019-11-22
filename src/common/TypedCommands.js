import React, { useEffect, createRef } from 'react'
import Typed from 'typed.js'
import './typed.css'

export default function TypedCommands (props) {
  const {
    contentType = 'html',
    strings = [],
    loop = true,
    loopCount = Infinity,
    backDelay = 1000,
    typeSpeed = 25,
    backSpeed = 40
  } = props
  const typedRef = createRef()

  useEffect(() => {
    const typedObj = new Typed(typedRef.current, {
      contentType,
      strings,
      loop,
      loopCount,
      backDelay,
      typeSpeed,
      backSpeed
    })

    return () => typedObj.destroy()
  }, [])

  return <div className='typed' ref={typedRef} />
}
