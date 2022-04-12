import {CognitoUserPool} from 'amazon-cognito-identity-js'

  const poolData = {
    UserPoolId: 'ap-southeast-1_MVACGbYZX',
    ClientId: '18dkr7s8copogiergpb6v454p3'
  };

  export const UserPool = new CognitoUserPool(poolData);



  const poolData2 = {
    UserPoolId: 'ap-southeast-1_irnaABT1m',
    ClientId: '5uv7259pt8uku2nj82hkvh76s3'
  };

  export const AdminPool = new CognitoUserPool(poolData2);