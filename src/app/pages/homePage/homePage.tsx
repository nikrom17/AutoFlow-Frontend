import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PageFrame from '@components/pageFrame/pageFrame';
import { Button } from 'antd';

const Home: React.FC = () => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuth0();

  return (
    <PageFrame>
      <p>User Info:</p>
      <p>{`First Name: ${isAuthenticated && user.given_name}`}</p>
      <p>{`Last Name: ${isAuthenticated && user.family_name}`}</p>
      <p>{`Email: ${isAuthenticated && user.email}`}</p>
      <div>
        <Button onClick={() => history.push('/about')} type="primary">
          Go to the about page
        </Button>
      </div>
    </PageFrame>
  );
};

export default Home;
