const env = process.env.NODE_ENV;
const basePath = env === "production" ? "/dpltst/" : "./";
export default basePath;
