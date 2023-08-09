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
  <div className=''>
    <div className="flex justify-center items-center">
      <h1>Top 100 Songs</h1>
    </div>

    <div className="bg-zinc-600 flex flex-col w-full border-opacity-50">
      {topSongs.length > 0 ? (
        <ol>
          {topSongs.map((song, index) => (
            <li key={song.id} className="flex items-center text-white">
              <span className="mr-2 text-gray-400">{index + 1}.</span>
              <div>
                {song.name} - {song.artists.map(artist => artist.name).join(', ')}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p>Loading...</p>
      )}
    </div>
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