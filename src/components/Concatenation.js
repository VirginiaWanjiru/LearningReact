
import React from'react';




const user={

    name:'Virginia Wanjiru',
    imageSize:300,
    imageSizeUrl:'./images/vg.jpg'
  };

  

  function Profile(){
    return(

      <>
      <h1>{user.name}</h1>
      <img 
      classname="avatar"
      src={user.imageSizeUrl}
      alt={'Photo of'+ user.name}
      style={{
        width:user.imageSize,
        height:user.imageSize
      }}
      />
      
      </>
    )
  }

  export default Profile;