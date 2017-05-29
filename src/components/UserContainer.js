import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import UserView from './UserView'


const enhance = compose(
  connect(),
)

const UserContainer = ({children, params, location}) => (
  <div>
    <UserView userId={params.userId} baseUrl={location.pathname.split('/').slice(0,3).join('/')}>
      {children}
    </UserView>
  </div>
)

export default enhance(UserContainer)