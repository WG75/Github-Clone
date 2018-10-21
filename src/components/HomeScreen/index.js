// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../Nav';
import SideBar from '../SideBar';
import Users from '../Users';
import './HomeScreen.css';

type Props = {
  user: any,
};

class HomeScreen extends React.Component<Props> {
  render() {
    const { user } = this.props;
    return user ? (
      <div className="home-container">
        <Nav avatar={user.avatar_url} username={user.login} admin={user.admin} />
        <div className="home__content">
          <SideBar
            repos={[{ name: 'AJAX' }, { name: 'quizzo' }]}
            recentAactivity={[
              {
                repo: {
                  id: 75024049,
                  name: 'elprices/elprices-website-api',
                  url: 'https://api.github.com/repos/elprices/elprices-website-api',
                },
                payload: {
                  push_id: 2957874752,
                  size: 1,
                  distinct_size: 1,
                  ref: 'refs/heads/dev',
                  head: '15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                  before: '29538af3ecf4ca3eabc81440f91b6d1e6cad77a9',
                  commits: [
                    {
                      sha: '15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                      author: {
                        email: 'waleed.gamal1000@gmail.com',
                        name: 'Waleed Gamal',
                      },
                      message: 'check picture data recieved from facebook before reading it',
                      distinct: true,
                      url:
                        'https://api.github.com/repos/elprices/elprices-website-api/commits/15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                    },
                  ],
                },
                created_at: '2018-10-14T16:09:05Z',
              },
              {
                repo: {
                  id: 75024049,
                  name: 'elprices/elprices-website-api',
                  url: 'https://api.github.com/repos/elprices/elprices-website-api',
                },
                payload: {
                  push_id: 2957874752,
                  size: 1,
                  distinct_size: 1,
                  ref: 'refs/heads/dev',
                  head: '15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                  before: '29538af3ecf4ca3eabc81440f91b6d1e6cad77a9',
                  commits: [
                    {
                      sha: '15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                      author: {
                        email: 'waleed.gamal1000@gmail.com',
                        name: 'Waleed Gamal',
                      },
                      message: 'check picture data recieved from facebook before reading it',
                      distinct: true,
                      url:
                        'https://api.github.com/repos/elprices/elprices-website-api/commits/15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                    },
                  ],
                },
                created_at: '2018-10-14T16:09:05Z',
              },
              {
                repo: {
                  id: 75024049,
                  name: 'elprices/elprices-website-api',
                  url: 'https://api.github.com/repos/elprices/elprices-website-api',
                },
                payload: {
                  push_id: 2957874752,
                  size: 1,
                  distinct_size: 1,
                  ref: 'refs/heads/dev',
                  head: '15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                  before: '29538af3ecf4ca3eabc81440f91b6d1e6cad77a9',
                  commits: [
                    {
                      sha: '15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                      author: {
                        email: 'waleed.gamal1000@gmail.com',
                        name: 'Waleed Gamal',
                      },
                      message: 'check picture data recieved from facebook before reading it',
                      distinct: true,
                      url:
                        'https://api.github.com/repos/elprices/elprices-website-api/commits/15f46f3cce06480e0dee444a215a1d3e7e41a5ba',
                    },
                  ],
                },
                created_at: '2018-10-14T16:09:05Z',
              },
            ]}
          />
          <Users users={[]} />
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default HomeScreen;
