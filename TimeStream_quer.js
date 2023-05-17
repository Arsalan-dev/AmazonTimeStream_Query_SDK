//import {TimestreamQueryClient, QueryCommand} from '@aws-sdk/client-timestream-query';
//run npm install @aws-sdk/client-timestream-query first


const {TimestreamQueryClient} = require("@aws-sdk/client-timestream-query");
const {QueryCommand} = require("@aws-sdk/client-timestream-query");
 const CREDENTIALS = {
    accessKeyId: 'XXXXXXXXXXXXX',
    secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  };


  async function queryTimestream() {

  const client = new TimestreamQueryClient({region: "eu-central-1", credentials: CREDENTIALS});
  const query = 'SELECT * FROM "myDataStreamDB"."Cloud_Test_Table_4" WHERE time between ago(30m) and now() ORDER BY time DESC LIMIT 10';

  const command = new QueryCommand({QueryString: query});

  try {
    const response = await client.send(command);
    console.log("Query Results: " , response.Rows);
  }
  catch(err){
    console.log("Error: ", err);
  }
}

queryTimestream();
