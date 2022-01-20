const request = require("request");
const query = process.argv.slice(2)[0];
const search = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(search, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Error ${query} cannot be found`);
  }
});
