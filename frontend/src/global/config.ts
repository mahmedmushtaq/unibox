const allConfigs = {
  default: {
    backendEndUrl: process.env.BACKEND_URL,
  },
  dev: {
    backendEndUrl: "https://wsnu8mibgg.execute-api.us-east-1.amazonaws.com/Prod",
  },
  prod: {},
};

// default settings will be override by dev configs and dev configs override by pro config
const config = { ...allConfigs.default, ...allConfigs.dev, ...allConfigs.prod };

export default config;
