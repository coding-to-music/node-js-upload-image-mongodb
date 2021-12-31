# Node.js Upload multiple images to MongoDB example

For more detail, please visit:
> [How to upload/store images in MongoDB using Node.js & Express](https://bezkoder.com/node-js-upload-multiple-images-mongodb/)

https://github.com/bezkoder/node-js-upload-image-mongodb

Front-end Apps to work with this Node.js Server:
- [Angular 8 Client](https://bezkoder.com/angular-multiple-files-upload/) / [Angular 10 Client](https://bezkoder.com/angular-10-file-upload/) / [Angular 11 Client](https://bezkoder.com/angular-11-file-upload/) / [Angular 12 Client](https://bezkoder.com/angular-12-file-upload/)

- [Angular Material 12](https://bezkoder.com/angular-material-12-file-upload/)

- [Vue Client](https://bezkoder.com/vue-axios-file-upload/) / [Vuetify Client](https://bezkoder.com/vuetify-file-upload/)

- [React Client](https://bezkoder.com/react-file-upload-axios/) / [React Hooks Client](https://bezkoder.com/react-hooks-file-upload/)

- [Material UI Client](https://bezkoder.com/material-ui-file-upload/)

More Practice:
> [Node.js Express File Upload Rest API example (static folder)](https://bezkoder.com/node-js-express-file-upload/)

> [Node.js Express File Upload with Google Cloud Storage example](https://bezkoder.com/google-cloud-storage-nodejs-upload-file/)

> [Upload & resize multiple images in Node.js using Express, Multer, Sharp](https://bezkoder.com/node-js-upload-resize-multiple-images/)

> [Node.js, Express & MongoDb: Build a CRUD Rest Api example](https://bezkoder.com/node-express-mongodb-crud-rest-api/)

> [Server side Pagination in Node.js with MongoDB and Mongoose](https://bezkoder.com/node-js-mongodb-pagination/)

> [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)

Associations:
> [MongoDB One-to-One relationship tutorial with Mongoose examples](https://bezkoder.com/mongoose-one-to-one-relationship-example/)

> [MongoDB One-to-Many Relationship tutorial with Mongoose examples](https://bezkoder.com/mongoose-one-to-many-relationship/)

> [MongoDB Many-to-Many Relationship with Mongoose examples](https://bezkoder.com/mongodb-many-to-many-mongoose/)

Integration (run back-end & front-end on same server/port)
> [Integrate React with Node.js Restful Services](https://bezkoder.com/integrate-react-express-same-server-port/)

> [Integrate Angular with Node.js Restful Services](https://bezkoder.com/integrate-angular-10-node-js/)

> [Integrate Vue with Node.js Restful Services](https://bezkoder.com/serve-vue-app-express/)

## Project setup
```
npm install
```

### Run
```
node src/server.js
```

Output
```java
Running at localhost:8080
Error: The database connection must be open to store files
    at GridFsStorage._handleFile (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/multer-gridfs-storage/lib/gridfs.js:175:12)
    at /mnt/ap/ap/node-js-upload-image-mongodb/node_modules/multer/lib/make-middleware.js:145:17
    at allowAll (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/multer/index.js:8:3)
    at wrappedFileFilter (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/multer/index.js:44:7)
    at Busboy.<anonymous> (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/multer/lib/make-middleware.js:115:7)
    at Busboy.emit (events.js:400:28)
    at Busboy.emit (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/busboy/lib/main.js:38:33)
    at PartStream.<anonymous> (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/busboy/lib/types/multipart.js:213:13)
    at PartStream.emit (events.js:400:28)
    at HeaderParser.<anonymous> (/mnt/ap/ap/node-js-upload-image-mongodb/node_modules/dicer/lib/Dicer.js:51:16) {
  storageErrors: []
}

{"message":"Error when trying upload many files: Error: The database connection must be open to store files"}
```

Attempt to connect to the database
```java
localhost:8080/files
```

Output
```java
{"message":"connect ECONNREFUSED 127.0.0.1:27017"}
```

Mongod port
```java
localhost:27017
```

Output
```java
It looks like you are trying to access MongoDB over HTTP on the native driver port.
```

Start the mongod database server

```java
mongod
```

Go to route files
```java
http://localhost:8080/files
```

Output
```java
{"message":"No files found!"}


Upload a file

```java
http://localhost:8080/
```

Output
```java
{"message":"Files have been uploaded."}
```

Upload a file

```java
http://localhost:8080/files
```

Output
```java
[{"name":"1640923740720-bezkoder-step5d.png","url":"http://localhost:8080/files/1640923740720-bezkoder-step5d.png"}]
```

Console Output
```java
Running at localhost:8080
[
  {
    fieldname: 'file',
    originalname: 'step5d.png',
    encoding: '7bit',
    mimetype: 'image/png',
    id: new ObjectId("61ce825c48a0585965e88d45"),
    filename: '1640923740720-bezkoder-step5d.png',
    metadata: null,
    bucketName: 'photos',
    chunkSize: 261120,
    size: 118473,
    md5: undefined,
    uploadDate: 2021-12-31T04:09:00.799Z,
    contentType: 'image/png'
  }
]
```
