// PDS Client Test

const pds_client = require('node-jose-icon').icon;

data = [
    ["a@abc.com", "01012345678"],
    ["b@abc.com", "01011115678"],
    ["c@abc.com", "01022225678"],
    ["d@abc.com", "01033335678"]
]

pds_client.serverCheck()

pds_client.validation(data, function (response) {
    console.log("request with ", data)
    console.log("response is ", response)
})

// PDS Server is running?
// Request Validation to PDS.
// {"status":"PDS is running..!"}
// request with  [
//   [ 'a@abc.com', '01012345678' ],
//   [ 'b@abc.com', '01011115678' ],
//   [ 'c@abc.com', '01022225678' ],
//   [ 'd@abc.com', '01033335678' ]
// ]
// response is  {"iat": 1628090290, "result": [1, 1, 1, 1], "type": "VALIDATE_VC_RESPONSE"}
