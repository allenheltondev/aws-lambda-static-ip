const axios = require('axios').default;
const { StatusCodes } = require('http-status-codes');
exports.lambdaHandler = async (event) => {
  try {
    const testUrl = 'https://api.ipify.org?format=json';
    const ipResponse = await axios.get(testUrl);
    console.log(ipResponse.data);

    const response = {
      expected: process.env.STATIC_IP,
      actual: ipResponse.data.ip,
      success: process.env.STATIC_IP == ipResponse.data.ip
    };
    
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(response),
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }
  catch (err) {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: { message: err.message },
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }
}