import {
  DynamoDBDocument,
  type QueryCommandInput,
} from "@aws-sdk/lib-dynamodb";
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

export interface DonorQueryOptions {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  params: QueryCommandInput;
}

export async function getDonors(options?: DonorQueryOptions): Promise<Donor[]> {
  const opts = options ?? {
    region: import.meta.env.AWS_REGION,
    accessKeyId: import.meta.env.AWS_ID,
    secretAccessKey: import.meta.env.AWS_KEY,
    params: {
      TableName: import.meta.env.AWS_DBNAME,
      IndexName: "all",
      KeyConditionExpression: "dummy = :dummyval",
      ExpressionAttributeValues: { ":dummyval": "0" },
      Limit: 30,
      ScanIndexForward: false,
    },
  };

  if (
    opts.params.TableName == undefined ||
    opts.accessKeyId == undefined ||
    opts.secretAccessKey == undefined
  ) {
    console.log("Unable to query donor database.");
    console.log("Creating single empty donor record.");
    return [DUMMY_DONOR];
  }

  const docClient = DynamoDBDocument.from(
    new DynamoDB({
      region: opts.region,
      credentials: {
        accessKeyId: opts.accessKeyId,
        secretAccessKey: opts.secretAccessKey,
      },
    }),
  );

  const params: QueryCommandInput = { ...opts.params };
  const donors: Donor[] = [];

  while (true) {
    let data;
    try {
      data = await docClient.query(params);
    } catch (err) {
      console.error(
        "Unable to query donors. Error:",
        JSON.stringify(err, null, 2),
      );
      console.log("Creating single empty donor record.");
      donors.push(DUMMY_DONOR);
      return donors;
    }

    if (!data.Items || data.Items.length === 0) {
      console.log("No donor records found during this pagination cycle.");
      console.log("Creating single empty donor record.");
      donors.push(DUMMY_DONOR);
      return donors;
    }

    console.log("Query for donors succeeded.");
    for (const item of data.Items as Donor[]) {
      if (item.publicName === "[object HTMLInputElement]") {
        item.publicName = "";
      }
      donors.push(item);
    }

    if (typeof data.LastEvaluatedKey !== "undefined") {
      console.log("Querying for more...");
      params.ExclusiveStartKey = data.LastEvaluatedKey;
    } else {
      return donors;
    }
  }
}
