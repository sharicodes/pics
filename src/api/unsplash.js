import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ed50e0287d3c5f7b3e841117baebab7d512b3d487355ad300f60c32d3894a2dd"
  }
});
