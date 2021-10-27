// PDS Client Test

const pds_client = require('node-jose-icon').icon;

data = [
    ["01012345678"],
    ["01011115678"],
    ["01022225678"],
    ["01033335678"]
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
//   [ '01012345678' ],
//   [ '01011115678' ],
//   [ '01022225678' ],
//   [ '01033335678' ]
// ]
// response is  {"iat": 1628090290, "result": [1, 1, 1, 1], "type": "VALIDATE_VC_RESPONSE"}
