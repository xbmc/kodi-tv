var { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb"),
  { DynamoDB } = require("@aws-sdk/client-dynamodb");

let DUMMYITEM = (item = {
  amount: 0,
  currency: "usd",
  createdAt: 1613609727,
  id: "blank-record",
  provider: "none",
  publicName: "Dummy Record",
});

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, options) => {
  return new Promise((resolve, reject) => {
    const { createNode } = actions;
    delete options.plugins;

    const processData = item => {
      const nodeId = createNodeId(`dynamodb-${item.id}`);
      const nodeContentDigest = createContentDigest(item);

      const nodeData = Object.assign({}, item, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          mediaType: `text/html`,
          contentDigest: nodeContentDigest,
          type: options.typeName,
          content: JSON.stringify(item),
        },
      });
      return nodeData;
    };

    const onQuery = (err, data) => {
      if (err || data.Items.length == 0) {
        if (err) {
          console.error(
            "Unable to query donors. Error:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("No donor records found during this pagination cycle.");
        }
        console.log("Creating single empty donor record.");
        const nodeData = processData(DUMMYITEM);
        createNode(nodeData);
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      } else {
        console.log("Query for donors succeeded.");
        data.Items.forEach(item => {
          if (item.publicName == "[object HTMLInputElement]") {
            item.publicName = "";
          }
          const nodeData = processData(item);
          createNode(nodeData);
        });

        if (typeof data.LastEvaluatedKey != "undefined") {
          console.log("Querying for more...");
          options.params.ExclusiveStartKey = data.LastEvaluatedKey;
          docClient.query(options.params, onQuery);
        } else {
          resolve();
        }
      }
    };

    if (
      options.params.TableName == undefined ||
      options.accessKeyId == undefined ||
      options.secretAccessKey == undefined
    ) {
      console.log("Unable to query donor database.");
      console.log("Creating single empty donor record.");
      createNode(processData(DUMMYITEM));
      resolve();
    } else {
      var docClient = DynamoDBDocument.from(
        new DynamoDB({
          region: options.region,
          credentials: {
            accessKeyId: options.accessKeyId,
            secretAccessKey: options.secretAccessKey,
          },
        })
      );
      docClient.query(options.params, onQuery);
    }
  });
};
