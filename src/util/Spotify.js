


const clientID = '51d2c1d65eed485687ea4d1f91b6df78'
const redirectUri = 'http://localhost:3000/'




let accessToken

const Spotify = {
    getAccessToken(){
       if(accessToken){
        
        return accessToken.replace('=','');
        
        }
         const accessTokenFind = window.location.href.match(/access_token([^&]*)/);
        const expireTimeFind = window.location.href.match(/expires_in=([^&]*)/)

            if(accessTokenFind && expireTimeFind){
                accessToken = accessTokenFind[1]
        
              accessToken=accessToken.replace('=','')
              
            const expireTime= Number(expireTimeFind[1])
         
                
              window.setTimeout(()=>accessToken = '', (expireTime * 1000))
               window.history.pushState('Access Token',null, '/')
                return accessToken.replace('=','')

            }else{
                const accessUrl=' https://accounts.spotify.com/authorize?client_id='+clientID+'&response_type=token&scope=playlist-modify-public&redirect_uri='+redirectUri;
                
                window.location=accessUrl;
            }
        
    },
    
     search(term){
            const accessToken = Spotify.getAccessToken()
            return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{headers:{ Authorization: `Bearer ${accessToken}`} }
               ).then(response =>{
                
                    return response.json()}
                    ).then(jsonResponse =>{
                        if(!jsonResponse.tracks){
                            
                            return []
                        
                        } return jsonResponse.tracks.items.map(track=> ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        popularity: track.popularity,
                        album: track.album.name,
                        preview: track.preview_url,
                        release: track.album.release_date,
                        image: track.album.images[0].url,
                        uri: track.uri
                    }
                    ))
                    
                }
                )
                    
                },

        
        savePlaylist(name, trackUris){
            if(!name || !trackUris.length){
                return
            }

            const accessToken = Spotify.getAccessToken()
            const headers = { Authorization: `Bearer ${accessToken}`}
            let userID
           return fetch('https://api.spotify.com/v1/me',{headers: headers}
           ).then(response => response.json()
           ).then(jsonResponse=>{
                   userID = jsonResponse.id 
                   return fetch('https://api.spotify.com/v1/users/'+userID+'/playlists',{
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: name})
                   }).then(response=>response.json()
                   ).then(jsonResponse=>{
                    const playlistId= jsonResponse.id
                    return fetch('https://api.spotify.com/v1/users/'+userID+'/playlists/'+playlistId+'/tracks', {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({uris: trackUris})}
                        )
                   })
                })

            
            
            }
        }
    
            
            
            
        
            
        


export default Spotify