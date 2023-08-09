import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
function TopSongs() {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    axios.get('/top100')
      .then(response => {
        setTopSongs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log('topSongs:', topSongs);

  return (
    <div>
      <h1>Top 100 Songs</h1>
      {topSongs.length > 0 ? (
        <ul>
          {topSongs.map(song => (
            <li key={song.id}>{song.name} - {song.artists.map(artist => artist.name).join(', ')}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TopSongs;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 
// function TopSongs(){
//      const [topSongs, setTopSongs] = useState([]);

//      useEffect(()=>{
//          axios.get('/top100')
//             .then(response =>{
//                 console.log('Response data:', response.data); 
//                 setTopSongs(response.data);

//             })
            
//      .catch(error =>{
//          console.error(error);
//      });
//  },[]);

// console.log('topSongs:', topSongs);
//  return (
//     <div>
//       <h1>Top 100 Songs</h1>
//       <ul>
//         {topSongs.map(song => (
//           <li key={song.id}>{song.name} - {song.artists.map(artist => artist.name).join(', ')}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//  export default TopSongs;