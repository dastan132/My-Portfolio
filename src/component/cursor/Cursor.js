import AnimatedCursor from 'react-animated-cursor'

function Cursor() {
  return (
    <>
      <div className='cursor__dot'>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='255, 255 ,255'
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
    </>
  )
}

export default Cursor
