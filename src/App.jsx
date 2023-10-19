import TopBar from './components/topBar/TopBar';
import Home from './Pages/Home/Home';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Routes, Route, Outlet, Link, Router } from 'react-router-dom';
import Post from './components/post/Post';

// {
//   path: "/",
//   element: (
//     <div>
//       <h1>Hello World</h1>
//       <Link to="about">About Us</Link>
//     </div>
//   ),
// },
// {
//   path: "about",
//   element: <div>About</div>,
// },
// ]);

function App() {
  const user = false;
  return (
    <>
      <TopBar />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="/register" element={ user? <Home/> : <Register />} />
        <Route path="/login" element={ user? <Home/> : <Login />} />
        <Route path="/write" element={user? <Write />: <Register/> } />
        {/* <Route path="/single" element={<Single />} /> */}
        <Route path="/settings" element={user? <Settings />: <Register/>} />
        <Route path="/post/:postId" element={<Single/> } />
        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}

        {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
