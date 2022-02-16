import React from "react"
import { Button, Image, Modal, Icon, Grid } from 'semantic-ui-react'
import "./UserModal.css"

class UserModal extends React.Component {
    appendUniversity = (props) => {
        if (props.role === "teacher") {
            return <h2 id="university">{props.user.university}</h2>
        }
    }
    render() {
        return (
            <Modal trigger={<p><Icon name='eye' />view contacts</p>}>
                <Modal.Header className="modalHeader">
                    <h2>You are paying for the contact of {this.props.user.name}</h2>
                </Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Image size='medium' src={this.props.user.avatar} wrapped />
                                {this.appendUniversity(this.props)}
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Modal.Description>
                                    <div className="pointBars"></div>
                                    <div id="nameAndLocation">
                                        <h1 id="headerName">{this.props.user.name}</h1>
                                        <Icon color='red' name="location arrow"/><p id="location">Location: {this.props.user.location}</p>
                                    </div>
                                    <h3>Gender: {this.props.user.gender}</h3>
                                    {/* <h3>Nationality: {this.props.user.country}</h3> */}
                                    <h3>Language: {(this.props.user.language.join(", "))}</h3>
                                    <div className="specialties">
                                        {this.props.user.areas.map(ele => {
                                            return <div className="specialty">{ele}</div>
                                        })}
                                    </div>
                                    <p>{this.props.user.specifications}</p>
                                </Modal.Description>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        content="Pay now"
                        labelPosition='right'
                        icon='checkmark'
                        positive
                    />
                </Modal.Actions>
            </Modal >
        )
    }
}

export default UserModal

// import React from "react"
// import { Button, Header, Image, Modal } from 'semantic-ui-react'

// function UserModal() {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <Modal
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       trigger={<Button>Show Modal</Button>}
//     >
//       <Modal.Header>Select a Photo</Modal.Header>
//       <Modal.Content image>
//         <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
//         <Modal.Description>
//           <Header>Default Profile Image</Header>
//           <p>
//             We've found the following gravatar image associated with your e-mail
//             address.
//           </p>
//           <p>Is it okay to use this photo?</p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='black' onClick={() => setOpen(false)}>
//           Nope
//         </Button>
//         <Button
//           content="Yep, that's me"
//           labelPosition='right'
//           icon='checkmark'
//           onClick={() => setOpen(false)}
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   )
// }

// export default UserModal