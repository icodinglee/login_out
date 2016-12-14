import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';

class CoverImageUpload extends Component {
  constructor(props){
    super(props);
    this.state={
      image:""
    }
  }
  handleChange(e){
    const file=e.target.files[0];
    console.log(file)
    if(!file.type.match('image.*')){
      console.log("请上传图片")
    }else{
      const reader=new FileReader();
      reader.onload=(event)=>{
        this.setState({
          image:event.target.result
        });
        this.props.handleImage(file);
      }
      reader.readAsDataURL(file);
    }
  }
  getStyles() {
    return {
      uploadWrapper: {
        position: 'relative',
        marginTop: '20px',
        marginBottom: '30px',
        width: '180px',
        border: '1px solid #ddd',
        height: '180px',
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
        backgroundImage: 'url(' + this.state.image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      },
      uploadLabel: {
        display: this.state.image ? 'none' : 'block',
        height: '20px',
        lineHeight: '20px',
        fontSize: '13px',
        paddingTop: '80px',
        paddingBottom: '80px',
        cursor: 'pointer'
      },
      svg: {
        width: '20px',
        height: '20px'
      },
      uploadText: {
        display: 'inline-block',
        verticalAlign: 'top'
      },
      uploadButton: {
        display: 'none'
      },
      uploadLabelAdd: {
        display: this.state.image ? 'block' : 'none',
        backgroundColor: '#ddd',
        height: '24px',
        position: 'absolute',
        top: '0',
        right: '0',
        cursor: 'pointer'
      }
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.uploadWrapper}>
        <label style={styles.uploadLabelAdd} htmlFor='imageUploadBtn'>
          <ContentAdd />
        </label>
        <label style={styles.uploadLabel} htmlFor='imageUploadBtn'>
          <ContentAdd style={styles.svg} />
          <span style={styles.uploadText}>{this.props.tip}</span>
        </label>
        <input type='file' id='imageUploadBtn' style={styles.uploadButton} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default CoverImageUpload;
