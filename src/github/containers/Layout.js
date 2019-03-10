import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CircularProgress, Snackbar } from 'react-md'

import { updateUser } from '../actions/userActions'
import { updateRepos } from '../actions/repoActions'
import { dismissError } from '../actions/utilsActions'

import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'

class Layout extends Component {

  componentDidMount() {
    const { updateUser, lastSuccessfulUserFetch } = this.props;
    const now = new Date();
    if (!lastSuccessfulUserFetch) {
      updateUser()
    } else if ((now - lastSuccessfulUserFetch) / 1000 > 300) {
      updateUser()
    }
  }

  updateAll = () => {
    updateUser();
    updateRepos();
  };

  render() {
    const { children, user, isFetchingUser, errorMsg, dismissError } = this.props;
    const toasts = errorMsg ? [{ text: errorMsg }] :[];
    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar user={user} updateAll={this.updateAll} />
              <div className='main-container'>
                <Sidebar user={user} />
                {children}
              </div>
            </div>
        }
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

export default connect( state => state, {updateUser, updateRepos, dismissError})(Layout)
