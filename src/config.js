const dev = {
    STRIPE_KEY: "pk_test_fgmL2p2LSsn7bv2V0aCpUFqM002onPyRWO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "blogs-app-api-dev-attachmentsbucket-1flmh6d4lu9se"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.mrdaab.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Rnt7jZRep",
      APP_CLIENT_ID: "6sqb6g32tno7kov72ht8k7cjfl",
      IDENTITY_POOL_ID: "us-east-1:a9cd44e0-866b-4d51-bc60-4d556443641e"
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
  