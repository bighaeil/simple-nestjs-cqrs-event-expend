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

# test user permissions

userId 가 1인 경우에만 게시글을 등록할 수 있습니다.

## add user

```shell
curl -X POST 'http://localhost:3000/users' -H "Content-Type: application/json" -d '{
  "id": "2",
  "name": "name2",
  "email" : "2mail@example.com"
}'
```

## post registration failed

userId 2는 등록할 수 없습니다.

```shell
curl -X POST 'http://localhost:3000/posts' -H "Content-Type: application/json" -d '{
  "id": "1",
  "userId": "2",
  "authorName": "author name",
  "title": "title",
  "content": "content",
  "tags": []
}'
```

# post registration success

```shell
curl -X POST 'http://localhost:3000/posts' -H "Content-Type: application/json" -d '{
  "id": "2",
  "userId": "1",
  "authorName": "author name",
  "title": "title",
  "content": "content",
  "tags": ["tag3"]
}'
```
