import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Contact = ({contact}) => (
	<Card>
    <CardHeader
      title={contact.name}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <p>{contact.phone}</p>
			<p>{contact.email}</p>
    </CardText>
  </Card>
)

export default Contact
