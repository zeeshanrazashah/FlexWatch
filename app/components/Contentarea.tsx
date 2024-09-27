import React from 'react'
import Player from './Player'
import Sidecontent from './Sidecontent'
import Contentchat from './Contentchat'
import Contentdesc from './Contentdesc'

function Contentarea() {
  return (<>
  <div>
  <Player/>
<Contentdesc/>
<Contentchat/>
  </div>
  
  <Sidecontent/>
  
  
  </>)
}

export default Contentarea