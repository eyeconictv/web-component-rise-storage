var header = { "Content-Type": "text/json" },
  folderFiles = JSON.stringify({
    "items": [{
      "name": "my-folder/",
      "contentType": "text/plain",
      "updated": "2015-02-04T17:44:00.549Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F"
    },
    {
      "name": "my-folder/home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg"
    },
    {
      "name": "my-folder/circle.png",
      "contentType": "image/png",
      "updated": "2015-02-06T14:25:11.312Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcircle.png"
    },
    {
      "name": "my-folder/my-image.bmp",
      "contentType": "image/bmp",
      "updated": "2015-02-06T11:24:13.313Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fmy-image.bmp"
    },
    {
      "name": "my-folder/golf.svg",
      "contentType": "image/svg+xml",
      "updated": "2015-01-30T08:19:09.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fgolf.svg"
    },
    {
      "name": "my-folder/turtle.gif",
      "contentType": "image/gif",
      "updated": "2015-02-04T17:46:31.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fturtle.gif"
    },
    {
      "name": "my-folder/car-ad.mp4",
      "contentType": "video/mp4",
      "updated": "2015-02-02T10:03:11.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcar-ad.mp4"
    },
    {
      "name": "my-folder/walking-dead.ogv",
      "contentType": "video/ogg",
      "updated": "2015-02-01T09:08:15.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fwalking-dead.ogv"
    },
    {
      "name": "my-folder/south-park.webm",
      "contentType": "video/webm",
      "updated": "2015-02-03T19:13:45.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fsouth-park.webm"
    }]
  }),
  folderFile = JSON.stringify({
    "items": [{
      "name": "my-folder/home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg"
    }]
  }),
  bucketFiles = JSON.stringify({
    "items": [{
      "name": "home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg"
    },
    {
      "name": "turtle.gif",
      "contentType": "image/gif",
      "updated": "2015-02-04T17:46:31.263Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fturtle.gif"
    }]
  }),
  bucketFile = JSON.stringify({
    "name": "home.jpg",
    "contentType": "image/jpeg",
    "updated": "2015-02-04T17:45:25.945Z",
    "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg"
  }),
  invalidCompanyData = JSON.stringify({
    "error": {
      "errors": [{
        "domain": "global",
        "reason": "notFound",
        "message": "Not Found"
      }],
      "code": 404,
      "message": "Not Found"
    }
  }),
  invalidFolderData = JSON.stringify({
    "kind": "storage#objects"
  }),
  xhr, requests, listener;
