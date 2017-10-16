import React, { Component } from 'react';
import { upload } from '../util/Upload';

class UploadFile extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    const currentFiles = this.fileInput.files;
    if (currentFiles.length === 0) {
      console.log('No files to upload...')
      return;
    }

    upload(currentFiles);
  }

  render() {
    return (
      <form
        // action="/action_page.php"
        // ref={el => this.form = el}
      >
        <input
          type="file"
          name="pic"
          accept="image/*"
          ref={el => this.fileInput = el}
        />
        <div
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </div>
      </ form>
    );
  }
}

export default UploadFile;
