const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)
  console.log('add view:')

  // const recorderBtn = document.getElementById('record')
  // recorderBtn.addEventListener('click', recordClick(recorderBtn))
  const socketUrl = 'https://vcserver2021.herokuapp.com'
  const socketBuilder = new SocketBuilder({ socketUrl })

  const peerConfig = Object.values({
    id: undefined,
    config: {
      //port: 9000,
      host: 'fierce-journey-43856.herokuapp.com',
      secure: true,
      path: '/'
    }
  })

  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media()
  const deps = {
    view, media, room, socketBuilder, peerBuilder
  }


  Business.initialize(deps)
}

window.onload = onload
