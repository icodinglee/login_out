import React, { Component } from 'react';
class DashBoard extends Component {
  render() {
    const styles = {
      root: {
        maxWidth: '720px',
        margin: '30px auto'
      },
      actions: {
        marginTop: '32px',
        marginBottom: '32px',
        textAlign: 'center'
      }
    }
    return (
      <div style={styles.root}>
        <div style={styles.actions}>
          管理员控制面板
        </div>
      </div>
    );
  }
}
export default DashBoard;
