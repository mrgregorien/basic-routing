import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./App.css"


const authUser = [{
  id: 1001,
  username: 'Atom',
  password: Math.random() + 'GzjkbgUYZY' + Math.random() * 50,
  email: 'atom@gmail.com',
}];

const friendDB = [{
  id: 0,
  name: 'John',
  email: 'john@example.com',
  status: 'Last active 2 hrs ago'
}, {
  id: 1,
  name: 'Alex',
  email: 'Alex@example.com',
  status: 'Online'

}, {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
  status: 'Offline'
}
];

function Feed(props) {
  return <h1>Welcome {props.username}</h1>
}


function Friends(props) {
  const friendsCards = friendDB.map(friend => {
    return <div className='friend-card' key={friend.id}>
      <div className='friend-details'>
        <h2>{friend.name}</h2>
        <p>Contact Email: {friend.email}</p>
      </div>
    </div>
  })
  return (
    <>
      <h1>All friends ({friendDB.length})</h1>
      {friendsCards}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Feed</Link>
        <Link to="/friends">Friends</Link>
        <Routes>
          <Route exact path="/" element={<Feed username={authUser[0].username} />} />
          <Route exact path="/friends" element={<Friends />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
