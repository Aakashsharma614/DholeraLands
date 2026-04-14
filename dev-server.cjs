const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "127.0.0.1";
const port = 4173;
const root = __dirname;

const mimeTypes = {
  ".css": "text/css; charset=UTF-8",
  ".html": "text/html; charset=UTF-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function send(res, statusCode, body, contentType = "text/plain; charset=UTF-8") {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

http
  .createServer((req, res) => {
    const urlPath = (req.url || "/").split("?")[0];
    const requestedPath = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
    const safeRelativePath = path
      .normalize(decodeURIComponent(requestedPath))
      .replace(/^(\.\.[/\\])+/, "");
    const filePath = path.join(root, safeRelativePath);

    if (!filePath.startsWith(root)) {
      send(res, 403, "Forbidden");
      return;
    }

    fs.stat(filePath, (statError, stat) => {
      if (statError) {
        send(res, 404, "Not Found");
        return;
      }

      const finalPath = stat.isDirectory() ? path.join(filePath, "index.html") : filePath;

      fs.readFile(finalPath, (readError, data) => {
        if (readError) {
          send(res, 404, "Not Found");
          return;
        }

        const extension = path.extname(finalPath).toLowerCase();
        send(res, 200, data, mimeTypes[extension] || "application/octet-stream");
      });
    });
  })
  .listen(port, host, () => {
    console.log(`Serving ${root} at http://${host}:${port}`);
  });
