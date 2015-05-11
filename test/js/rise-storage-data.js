var header = { "Content-Type": "text/json" },
  images = {
    "items": [{
      "name": "images/",
      "contentType": "text/plain",
      "updated": "2015-02-04T17:44:00.549Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F",
      "etag": "CIjxrtzryMMCEAE="
    },
    {
      "name": "images/home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
      "etag": "COjLvarr/cQCEAE="
    },
    {
      "name": "images/circle.png",
      "contentType": "image/png",
      "updated": "2015-02-06T14:25:11.312Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcircle.png",
      "etag": "CMiEudSn2MMCEAs="
    },
    {
      "name": "images/my-image.bmp",
      "contentType": "image/bmp",
      "updated": "2015-02-06T11:24:13.313Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fmy-image.bmp",
      "etag": "CJi3zten2MMCEA0="
    }]
  },
  mixedMedia = {
    "items": [{
      "name": "images/",
      "contentType": "text/plain",
      "updated": "2015-02-04T17:44:00.549Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F",
      "etag": "CIjxrtzryMMCEAE="
    },
    {
      "name": "images/home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
      "etag": "COjLvarr/cQCEAE="
    },
    {
      "name": "images/circle.png",
      "contentType": "image/png",
      "updated": "2015-02-06T14:25:11.312Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcircle.png",
      "etag": "CMiEudSn2MMCEAs="
    },
    {
      "name": "images/my-image.bmp",
      "contentType": "image/bmp",
      "updated": "2015-02-06T11:24:13.313Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fmy-image.bmp",
      "etag": "CJi3zten2MMCEA0="
    },
    {
      "name": "images/golf.svg",
      "contentType": "image/svg+xml",
      "updated": "2015-01-30T08:19:09.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fgolf.svg",
      "etag": "CPjC1qHc7MQCEAE="
    },
    {
      "name": "images/turtle.gif",
      "contentType": "image/gif",
      "updated": "2015-02-04T17:46:31.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fturtle.gif",
      "etag": "CLCKypbW/cQCEAE="
    },
    {
      "name": "images/car-ad.mp4",
      "contentType": "video/mp4",
      "updated": "2015-02-02T10:03:11.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcar-ad.mp4",
      "etag": "CKCa+Y2nq8MCEAM="
    },
    {
      "name": "images/walking-dead.ogv",
      "contentType": "video/ogg",
      "updated": "2015-02-01T09:08:15.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fwalking-dead.ogv",
      "etag": "CJC2jJrFqsMCEAE="
    },
    {
      "name": "images/south-park.webm",
      "contentType": "video/webm",
      "updated": "2015-02-03T19:13:45.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fsouth-park.webm",
      "etag": "CLDO+JDspcMCEAE="
    }]
  },
  folderImage = {
    "items": [{
      "name": "images/home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
      "etag": "COjLvarr/cQCEAE="
    }]
  },
  bucketImage = {
    "name": "home.jpg",
    "contentType": "image/jpeg",
    "updated": "2015-02-04T17:45:25.945Z",
    "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/home.jpg",
    "etag": "COjLvarr/cQCEAE="
  },
  xhr, requests;
