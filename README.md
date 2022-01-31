# Node.js Upload multiple images to MongoDB example

https://node-js-upload-image-mongodb.vercel.app/

https://github.com/coding-to-music/node-js-upload-image-mongodb

https://www.bezkoder.com/node-js-upload-store-images-mongodb/

https://github.com/bezkoder/node-js-upload-image-mongodb

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

### There are 4 routes:

```java
– GET: Home page for the upload form.
– POST "/upload" to call the uploadFiles function of the controller. This is also for action="/upload" in the view.
– GET /files for list of Images.
– GET /files/:name to download the image with the file name.
```

Start the mongod database server

```java
mongod
```

### Run

```
node src/server.js
```

Go to route files

```java
http://localhost:8080/files
```

Output

````java
{"message":"No files found!"}


Upload a file

```java
http://localhost:8080/
````

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
