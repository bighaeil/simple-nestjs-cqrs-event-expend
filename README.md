# simple-nestjs-cqrs-event-expand

# server install

```shell
npm install
```

만약 설치가 잘 안되면 설치된 파일을 제거하고 다시 설치합니다.

```shell
rm -rf node_modules package-lock.json
npm install
```

# server start

```shell
npm run start:dev
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
  "content": "content",
  "tags": ["tag1", "tag2"]
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

# find tags

```shell
curl -X GET 'http://localhost:3000/tags'
```
