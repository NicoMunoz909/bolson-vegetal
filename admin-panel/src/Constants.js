const development = {
  url: "http://localhost:4000/items",
  authUrl: "http://localhost:4000/auth",
  imgUrl: "http://localhost:4000/img",
};

const production = {
  url: "https://bolsonvegetal-iqs3.onrender.com/items",
  authUrl: "https://bolsonvegetal-iqs3.onrender.com/auth",
};

// eslint-disable-next-line no-undef
export const config =
  process.env.NODE_ENV === "development" ? development : production;
