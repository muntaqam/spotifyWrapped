const Login = () =>{
    const handleLogin = () =>{
        console.log('handleLogin called');
        //window.location.href='/auth/spotify';
        window.location.href = 'http://localhost:4000/auth/spotify'; 
    };
    return (
    <div className="bg-gray-800 shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
      <form className="space-y-6 font-spotify" action="#">
        {/* Use an anchor element for redirection */}
        <a href="http://localhost:4000/auth/spotify" className="text-white font-bold flex items-center justify-start" onClick={handleLogin}>
          <img src={process.env.PUBLIC_URL + '/spotify-logo.png'} alt="Spotify" className="h-6 w-6 mr-2" />
          Login with Spotifyy
        </a>
      </form>
    </div>
  );
}


export default Login;
