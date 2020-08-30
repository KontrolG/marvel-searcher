const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/*", (request, response) => {
  const filePath = getFilePath(request.url);
  console.log(request.url, path.join(__dirname, "../public", filePath));
  return response.sendFile(path.join(__dirname, "../public", filePath));
});

const getFilePath = (requestUrl) => {
  const { dir, ext, base } = path.parse(requestUrl);
  if (!ext) {
    return "index.html";
  }
  return getFilePathFromRoot(dir, base);
};

const getFilePathFromRoot = (dir, base) => {
  const pathSegments = dir.split("/").filter(Boolean).slice(1);
  return path.join(...pathSegments, base);
};

const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`App listening at port ${port}`));
