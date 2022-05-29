const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content) {
  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links);
}

async function getAlbum(id) {
  const response = await fetch(`https://photos.app.goo.gl/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return extractPhotos(response.data);
}

module.exports = {
  getAlbum,
};
