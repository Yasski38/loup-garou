import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Start = () => {
  const { user } = useSession();
  return (
    <div>
    
    <Header>
    </Header>
      <Link to="/create" onClick={() => createGame(user)}> <Button> Nouvelle partie </Button>
      </Link>
      <br />
      <Link to="/join">
        <Button>Rejoindre une partie</Button>
      </Link>
      <Footer>
    </Footer>
    </div>
    
    
  );
}

export default Start;
