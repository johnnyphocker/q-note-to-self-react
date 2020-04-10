import React, { Component, Fragment } from 'react';
import Note from './Note';

class App extends Component {

  state = {
    text: '',
    notes: []
  }

  submit = () => {
    
    const {notes} = this.state;

    notes.push({text: this.state.text});

    this.setState({notes, text: ''});

  }

  clear = () => this.setState({notes: []});

  render() {

    return (
      <Fragment>
        <h2>Note to self</h2>
        <form>
          <input className='inputchange' type="text" value={this.state.text} onChange={e => this.setState({text: e.target.value})}/>
          <input className='create' type='button' onClick={() => this.submit()} value='Submit' />
          <input className='btn' type='button' onClick={() => this.clear()} value='Clear' />
        </form>
        {
          this.state.notes.map((el, i) => <Note key={i} text={el.text} /> )
        }
      </Fragment>
    );
  }
}

export default App;
