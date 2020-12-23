import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-dbb60.cloudfunctions.net/api",
  //http://localhost:5001/clone-dbb60/us-central1/api
});

export default instance;
