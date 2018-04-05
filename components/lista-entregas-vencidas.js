import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/action/assignment-late'

export default class ListaEntregasVencidas extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <List>
        {this.props.entregas.map((e) => (
          <ListItem
            leftAvatar={<Avatar icon={<FileFolder />} />}
            rightIcon={<ActionInfo />}
            primaryText={e.nombre}
            secondaryText={e.fechaEntrega}
          />
        ))}
      </List>
    )
  }
}
