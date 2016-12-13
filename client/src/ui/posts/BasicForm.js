import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class BasicForm extends Component {
  getBasicFormInputValue(){
      const name = this.refs.name.getValue();
      const content = this.refs.content.getValue();
      return { name, content }
  }
  render() {
    let styles = {
      root: {
        padding: '20px',
        marginTop: '32px',
        backgroundColor: '#fff',
        boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3'
      },
      textField: {
        display: 'block',
        fontSize: '.85em',
        width: '100%'
      }
    }
    return (
      <div style={styles.root}>
        <TextField ref='name' floatingLabelText='标题' style={styles.textField} />
        <div style={{marginTop: '15px', marginBottom: '15px'}}>
          <TextField ref='content' floatingLabelText="内容" multiLine={true} rows={3} style={styles.textField} />
        </div>
      </div>
    );
  }
}

export default BasicForm;
