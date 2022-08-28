import React from 'react'


const VideoContainer = () => {
  return (
    <div className='relative px-4'>
        <video src="https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/video%2FGuitarist%20-%20139.mp4?alt=media&token=ded34be1-5e13-4ca3-9175-1aaf7dc4000a"
        controls
        poster='https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Fgutarist.PNG?alt=media&token=5d0f18aa-f024-41dc-95a4-7a777e861d39'
        className='min-w-full min-h-full w-auto h-auto bg-cover rounded-2xl'
       
        ></video>
        <div className='absolute top-0 left-0 w-full h-[40px] p-2'>
            
        </div>
    </div> 
  )
}

export default VideoContainer
