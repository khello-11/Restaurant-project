import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer NoIuAgBbrRwRQpnMKC2hnUDggmQiQyv2f24HRwcvH9zn2WOoN_cfba_WDj0T_EU9VsYuwDhjaLKnjNEYTK9-LdgBld_3j6RH4ugRLk-5xjigp7n_gUE697DoAagtY3Yx",
  },
});
