const development = {
  url: "http://localhost:4000/items",
  authUrl: "http://localhost:4000/auth",
  imgUrl: "http://localhost:4000/img",
};

const production = {
  url: "https://bolsonvegetal.onrender.com/items",
  authUrl: "https://bolsonvegetal.onrender.com/auth",
  imgUrl: "https://bolsonvegetal.onrender.com/img",
};

// eslint-disable-next-line no-undef
export const config = process.env.NODE_ENV === "development" ? development : production;
