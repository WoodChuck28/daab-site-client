const dev = {
    STRIPE_KEY: "pk_test_fgmL2p2LSsn7bv2V0aCpUFqM002onPyRWO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "tickers-app-api-dev-attachmentsbucket-4zb89mt9a3er"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.mrdaab.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_bTDy7dREW",
      APP_CLIENT_ID: "604dn7d0f2aqcv6mm6cn6aj8oc",
      IDENTITY_POOL_ID: "us-east-1:704eeae2-7a62-438e-9086-8c570b738780"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
    s3: {
      REGION: "us-east-1",
      BUCKET: "tickers-app-api-prod-attachmentsbucket-9g0in1ycgl49"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.mrdaab.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_tGLPGSHaT",
      APP_CLIENT_ID: "285sr5g88gd4kfs6grkpb55399",
      IDENTITY_POOL_ID: "us-east-1:4087cf02-bd0c-470c-a81e-a47542e45a4d"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };
  