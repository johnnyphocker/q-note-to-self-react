import React, { Component } from 'react';
import { Container, Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  state = {
    text: '',
    notes: []
  }

  submit = () => {
    
    const {notes} = this.state;

    notes.push({text: this.state.text});

    this.setState({notes});

  }

  render() {

    return (
      <Container>
        <h2>Note to self</h2>
        <Form inline>
          <FormControl onChange={e => this.setState({text: e.target.value})} />
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((el, i) => <div key={i}>{el.text}</div> )
        }
      </Container>
    );
  }
}

export default App;
