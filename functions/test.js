const axios = require("axios");

exports.handler = function(event, context, callback) {
  const parsedBody = JSON.parse(event.body);
  console.log(parsedBody);
  axios({
    method: "post",
    url: "https://en5vtkg3kj7ms.x.pipedream.net",
    data: { name: parsedBody.name }
  })
    .then(res => {
      console.log(res);
      callback(null, {
        statusCode: 200,
        body: "Dope, it's working!"
      });
    })
    .catch(err => {
      console.log(err);
      callback(new Error("Something is not Dope!"));
    });
};
