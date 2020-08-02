import axios from "axios";

export default axios.create({
  baseURL: "https://yalantis-react-school-api.yalantis.com/api/",
  responseType: "json"
});