# simple-nestjs-cqrs-event

# server start

```shell
npm install
```

```shell
npm run start
```

# server test

## find users

```shell
curl -X GET 'http://localhost:3000/users'
```

## create user

```shell
curl -X POST 'http://localhost:3000/users' -H "Content-Type: application/json" -d '{
  "id": "1",
  "name": "name",
  "email" : "email@example.com"
}'
```

## create post

```shell
curl -X POST 'http://localhost:3000/posts' -H "Content-Type: application/json" -d '{
  "id": "1",
  "userId": "1",
  "authorName": "author name",
  "title": "title",
  "content": "content"
}'
```

## find posts by user id

```shell
curl -X GET 'http://localhost:3000/posts/users/1'
```

## update user name

```shell
curl -X PUT 'http://localhost:3000/users/1' -H "Content-Type: application/json" -d '{
  "newName": "new name"
}'
```