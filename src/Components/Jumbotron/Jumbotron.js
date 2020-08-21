import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default () => {
    return <Grid id='jumboContainer' className='container90'>
        <Grid.Row>
            <Grid.Column width={7}>
                <Image src='https://picsum.photos/300/300' style={{width: '100%'}} alt='...' />
            </Grid.Column>
            <Grid.Column className='center' width={9}>
                <h1 className='jumboTitle'>Connecting reliable to teachers to students in need. All subjects in all levels of expertise.</h1>
                <h1 className='jumboSubTitle'>Join our community and enjoy great content, even before find your ideal teach, with our many free ebooks and other free material.</h1>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Button as={Link} className='jumboButton' to='/Teachers'>Teachers</Button>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button as={Link} className='jumboButton' to='/Students'>Students</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}