import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";

export interface Donor {
  id: string;
  amount: number;
  currency: string;
  createdAt: number;
  provider: string;
  publicName: string;
}

const DUMMY_DONOR: Donor = {
  amount: 0,
  currency: "usd",
  createdAt: 1613609727,
  id: "blank-record",
  provider: "none",
  publicName: "Dummy Record",
};

export async function getDonors(): Promise<Donor[]> {
  const accessKeyId = import.meta.env.AWS_ID;
  const secretAccessKey = import.meta.env.AWS_KEY;
  const tableName = import.meta.env.AWS_DBNAME;

  if (!tableName || !accessKeyId || !secretAccessKey) {
    console.log(
      "Unable to query donor database. Creating single empty donor record.",
    );
    return [DUMMY_DONOR];
  }

  const docClient = DynamoDBDocument.from(
    new DynamoDB({
      region: "us-east-1",
      credentials: { accessKeyId, secretAccessKey },
    }),
  );

  const params = {
    TableName: tableName,
    IndexName: "all",
    KeyConditionExpression: "dummy = :dummyval",
    ExpressionAttributeValues: { ":dummyval": "0" },
    Limit: 30,
    ScanIndexForward: false,
  };

  try {
    const data = await docClient.query(params);

    if (!data.Items || data.Items.length === 0) {
      console.log(
        "No donor records found. Creating single empty donor record.",
      );
      return [DUMMY_DONOR];
    }

    console.log("Query for donors succeeded.");
    return (data.Items as Donor[]).map((item) => {
      if (item.publicName === "[object HTMLInputElement]") {
        item.publicName = "";
      }
      return item;
    });
  } catch (err) {
    console.error(
      "Unable to query donors. Error:",
      err instanceof Error ? err.message : "Unknown error",
    );
    console.log("Creating single empty donor record.");
    return [DUMMY_DONOR];
  }
}
