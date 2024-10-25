import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
    region: process.env.AWS_REGION || 'us-east-1', // Use your AWS region
});

// Create a DynamoDB Document Client
const docClient = new AWS.DynamoDB.DocumentClient();

const connectToDatabase = async () => {
    try {
        // Optionally validate the connection
        const data = await docClient.listTables().promise();
        console.log('DynamoDB Connected: Tables:', data.TableNames);
    } catch (error) {
        console.error(`Connection Error: ${error.message}`);
        throw error; // Rethrow the error for handling later
    }
};

// Export named exports
export default { connectToDatabase, docClient };