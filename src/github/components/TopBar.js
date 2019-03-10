import React from 'react'
import { Toolbar, Avatar, Button } from 'react-md'

const TopBar = ({ user, updateAll }) => {
  const avatar = user
    ? <Avatar key='avt' src={user.avatar_url} />
    : <Avatar key='avt' />
  const name = user ? user.login : ''
  const button = <Button onClick={updateAll} icon>replay</Button>
  return (
    <Toolbar fixed colored nav={avatar} title={name} actions={button} />
  )
}

export default (TopBar)
