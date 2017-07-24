import React from 'react';
import { connect } from 'react-redux';
import { addItemAction, deleteItemAction } from './actions';

import { Container, Header, Title, Content, Card, CardItem, Body, Text, Button, Right, Icon, Input, List, ListItem } from 'native-base';

import { StyleSheet } from 'react-native';

class App extends React.Component {
  state = {
    inputValue: ''
  }

  componentDidMount() {

  }

  addItemPressed = () => {
    if (this.state.inputValue === '') return;
    
    this.props.dispatchAddItem({
      text: this.state.inputValue,
      checked: false
    });

    this.setState({ inputValue: '' });
  }

  deleteItemPressed = (item) => {
    this.props.dispatchDeleteItem(item)
  }

  updateInput = (inputValue) => {
    this.setState({ inputValue })
  }

  render() {
    return (
      <Container>

        <Header>
          <Body>
            <Title>React Redux Native Base</Title>
          </Body>
        </Header>

        <Content>

          <Card>
            <CardItem>
              <Body>
                <Input onChangeText={text => this.updateInput(text)}
                  value={this.state.inputValue}
                  placeholder="Enter the item description" />

                <Button block success onPress={() => this.addItemPressed()}>
                  <Text>Add</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>

          <List>{
            this.props.items.map((item, index) => (
              <ListItem key={index}>
                <Body>
                  <Text>{item.text}</Text>
                </Body>
                <Right>
                  <Button transparent danger onPress={() => this.deleteItemPressed(item)}>
                    <Icon name='trash' />
                  </Button>
                </Right>
              </ListItem>
            ))
          }</List>

        </Content>

      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddItem: (item) => dispatch(addItemAction(item)),
    dispatchDeleteItem: (item) => dispatch(deleteItemAction(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)



const styles = StyleSheet.create({
});