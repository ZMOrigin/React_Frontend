import React from "react"
import { Form, Button } from "semantic-ui-react"
import "./RegisterForm.css"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class RegisterForm extends React.Component {
    render() {
        return <div id="registerContainer">
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Prefered name' placeholder='Prefered name' /> 
                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Email' placeholder='joe@schmoe.com' /> 
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Enter your password' type='password' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Re-enter your password' type='password' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Phone number' />
                </Form.Group>
                {/* <Form.TextArea label='About' placeholder='Tell us more about you...' /> */}
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Button fluid type='submit'>Sign Up</Button>
            </Form>
        </div>
    }
}

export default RegisterForm

// import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

// class FormExampleSubcomponentControl extends Component {
//   render() {
//     return (
    //   <Form>
    //     <Form.Group widths='equal'>
    //       <Form.Input fluid label='First name' placeholder='First name' />
    //       <Form.Input fluid label='Last name' placeholder='Last name' />
    //       <Form.Select
    //         fluid
    //         label='Gender'
    //         options={options}
    //         placeholder='Gender'
    //       />
    //     </Form.Group>
    //     <Form.TextArea label='About' placeholder='Tell us more about you...' />
    //     <Form.Checkbox label='I agree to the Terms and Conditions' />
    //     <Form.Button>Submit</Form.Button>
    //   </Form>
//     )
//   }
// }

// export default FormExampleSubcomponentControl