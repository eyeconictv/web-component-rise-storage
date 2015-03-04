var header = { "Content-Type": "application/json; charset=UTF-8" },
  single = JSON.stringify({
    "result": true,
    "code": 200,
    "files": [
    {
      "id": "abc123125px-Link_Bow.png",
      "companyId": "abc123",
      "objectId": "125px-Link_Bow.png",
      "contentType": "image/png",
      "url": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/125px-Link_Bow.png?alt=media",
      "signedUrl": "https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getDownloadURI?companyId=abc123&fileName=125px-Link_Bow.png",
      "tags": [
      {
        "type": "LOOKUP",
        "name": "brand",
        "value": "nike"
      },
      {
        "type": "FREEFORM",
        "name": "discount",
        "value": "10% off"
      },
      {
        "type": "FREEFORM",
        "name": "special",
        "value": "2 for 1"
      }],
      "timeline": "{\"type\":\"TIMELINE\",\"timeDefined\":true,\"duration\":60,\"pud\":\"false\",\"trash\":\"false\",\"carryon\":\"false\",\"startDate\":\"01/30/15 12:00 AM\",\"endDate\":\"01/31/15 12:00 AM\",\"startTime\":null,\"endTime\":null,\"recurrenceOptions\":null}",
      "creationDate": "2015-02-17T13:53:13.638Z",
      "changedDate": "2015-02-19T21:15:29.029Z",
      "changedBy": "example@example.com",
      "createdBy": "example@example.com"
    }],
    "kind": "storage#filesItem",
    "etag": "\"sA9CN9sqnXP8KhfRNioroKGc0ZA/bH1xIBfwl9Ai_0KEIZRlcm6-ulo\""
  }),
  multiple = JSON.stringify({
    "result": true,
    "code": 200,
    "files": [
    {
      "id": "abc123shoes.png",
      "companyId": "abc123",
      "objectId": "shoes.png",
      "contentType": "image/png",
      "url": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/shoes.png?alt=media",
      "signedUrl": "https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getDownloadURI?companyId=abc123&fileName=shoes.png",
      "tags": [
      {
        "type": "LOOKUP",
        "name": "brand",
        "value": "nike"
      },
      {
        "type": "FREEFORM",
        "name": "discount",
        "value": "10% off"
      },
      {
        "type": "FREEFORM",
        "name": "special",
        "value": "2 for 1"
      }],
      "timeline": "{\"type\":\"TIMELINE\",\"timeDefined\":true,\"duration\":60,\"pud\":\"false\",\"trash\":\"false\",\"carryon\":\"false\",\"startDate\":\"01/30/15 12:00 AM\",\"endDate\":\"01/31/15 12:00 AM\",\"startTime\":null,\"endTime\":null,\"recurrenceOptions\":null}",
      "creationDate": "2015-02-17T13:53:13.638Z",
      "changedDate": "2015-02-19T21:15:29.029Z",
      "changedBy": "example@example.com",
      "createdBy": "example@example.com"
    },
    {
      "id": "abc123jeans.jpg",
      "companyId": "abc123",
      "objectId": "jeans.jpg",
      "contentType": "image/jpeg",
      "url": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/jeans.jpg?alt=media",
      "signedUrl": "https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getDownloadURI?companyId=abc123&fileName=jeans.jpg",
      "tags": [
      {
        "type": "LOOKUP",
        "name": "brand",
        "value": "levi"
      },
      {
        "type": "LOOKUP",
        "name": "discount",
        "value": "10% off"
      }],
      "creationDate": "2015-02-03T08:18:09.351Z",
      "changedDate": "2015-03-06T13:45:11.538Z",
      "changedBy": "test@risevision.com",
      "createdBy": "test@risevision.com"
    },
    {
      "id": "abc123no-name.bmp",
      "companyId": "abc123",
      "objectId": "no-name.bmp",
      "contentType": "image/bmp",
      "url": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/no-name.bmp?alt=media",
      "signedUrl": "https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getDownloadURI?companyId=abc123&fileName=no-name.bmp",
      "tags": [
      {
        "type": "LOOKUP",
        "name": "brand"
      }],
      "creationDate": "2015-01-15T10:33:52.543Z",
      "changedDate": "2015-01-15T08:23:16.123Z",
      "changedBy": "test@risevision.com",
      "createdBy": "test@risevision.com"
    },
    {
      "id": "abc123car-ad.mp4",
      "companyId": "abc123",
      "objectId": "car-ad.mp4",
      "contentType": "video/mp4",
      "url": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/car-ad.mp4?alt=media",
      "signedUrl": "https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getDownloadURI?companyId=abc123&fileName=car-ad.mp4",
      "tags": [
      {
        "type": "LOOKUP",
        "name": "brand"
      }],
      "creationDate": "2015-02-10T21:21:56.785Z",
      "changedDate": "2015-02-10T21:22:06.140Z",
      "changedBy": "example@example.com",
      "createdBy": "example@example.com"
    }],
    "kind": "storage#filesItem",
    "etag": "\"sA9CN9sqnXP8KhfRNioroKGc0ZA/bH1xIBfwl9Ai_0KEIZRlcm6-ulo\""
  }),
  invalidTypeData = JSON.stringify({
    "result": false,
    "code": 409,
    "message": "Tag type is invalid invalid",
    "kind": "storage#filesItem",
    "etag": "\"m1vIvZ7TiNkwJYTAd7caZepInHo/0FP_2131UC_nQPs-HPjaCx9wDhM\""
  }),
  shoes = '{"url":"https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/shoes.png?alt=media","tags":[{"type":"LOOKUP","name":"brand","value":"nike"},{"type":"FREEFORM","name":"discount","value":"10% off"},{"type":"FREEFORM","name":"special","value":"2 for 1"}],"timeline":{"type":"TIMELINE","timeDefined":true,"duration":60,"pud":"false","trash":"false","carryon":"false","startDate":"01/30/15 12:00 AM","endDate":"01/31/15 12:00 AM","startTime":null,"endTime":null,"recurrenceOptions":null}}',
  jeans = '{"url":"https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/jeans.jpg?alt=media","tags":[{"type":"LOOKUP","name":"brand","value":"levi"},{"type":"LOOKUP","name":"discount","value":"10% off"}]}',
  noName = '{"url":"https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/no-name.bmp?alt=media","tags":[{"type":"LOOKUP","name":"brand"}]}',
  carAd = '{"url":"https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/car-ad.mp4?alt=media","tags":[{"type":"LOOKUP","name":"brand"}]}',
  xhr, requests, listener;
