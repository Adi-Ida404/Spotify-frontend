
export const Playlist = () => {
  return (
    <div style={{  alignItems: 'flex-start', marginTop:'35px', marginLeft:'20px', width:'250px', height:'325px'}}>
          <div style={{ borderColor:'#545454', borderWidth:'2px' }}>
            <img 
             src="https:i.seadn.io/gae/mzoFMt1PjKuRV3wdudEeHB526Ce-GujYKz4DKtw3W_50xxlN93_MCxnLPlXBXwHRVN7ADXALAM2godNMYJ868t9srZzTVDplVYQoDg?auto=format&dpr=1&w=1000" 
             height={250} 
             width={250} 
            //  style={{ borderColor:'white', borderWidth:'5px' }} 
             alt="Thumbnail" 
            /></div>
          <div style={{ marginLeft: '1px', marginTop:'10px'  }}>
            <b><h3 style={{ fontSize:17, color: 'white' }}>Playlist #</h3></b>
            <p style={{ color: 'grey' }}>Name of the Creator</p>
          </div>
    </div>
  )
}


