import React, { Fragment } from 'react';
import { Header, Image, Card, List, ListItem, Grid, Icon, GridRow, GridColumn } from 'semantic-ui-react';


const Contact = () => (
    <Fragment>
        <Grid columns={2} divided>
            <GridRow>
                <GridColumn>
                    <Header as='h1'>Contact Us</Header>
                </GridColumn>
                <GridColumn>
                    <List>
                        <ListItem>
                            <List.Icon name='users' />
                            <List.Content>Enterprise International</List.Content>
                        </ListItem>
                        <ListItem>
                            <List.Icon name='phone' />
                            <List.Content>(111) 111-1111</List.Content>
                        </ListItem>
                        <ListItem>
                            <List.Icon name='marker' />
                            <List.Content>YellowStone, WY</List.Content>
                        </ListItem>
                        <ListItem>
                            <List.Icon name='mail' />
                            <List.Content>
                                <a href='Enterrpise@gmail.com'>Enterrpise@gmail.com</a>
                            </List.Content>
                        </ListItem>
                    </List>
                </GridColumn>
            </GridRow>
        </Grid >
        <Grid>
            <GridRow>
                <Grid.Column>
                    <Image src='https://www.travelwyoming.com/sites/default/files/styles/16_9_wide/public/assets/YNP_hero1_v2.gif?itok=N0SaAXh6&timestamp=1457981209' />
                </Grid.Column>
            </GridRow>
        </Grid>
    </Fragment>

)


export default Contact;