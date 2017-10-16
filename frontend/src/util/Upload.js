import axios from 'axios';
import { URL, UPLOAD } from '../config/Api';

export function upload(files) {
  // only uploads the first one right now
  let formData = new FormData();
  formData.append("docfile", files[0]);
  return axios
    .post(URL + UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then((rsp) => {
      console.log('SICK THIS WORKED: ', rsp);
    })
    .catch((rsp) => {
      console.log('this did not work: ', rsp);
    });
}
