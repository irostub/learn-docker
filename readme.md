# Docker 와 CI 환경 학습

## 소개

Docker 에 대한 개념 이해와 실습, Docker, Travis-CI, AWS-EB 를 연결해 CI 환경을 구성합니다. ROOT 디렉토리 별로 개별 프로젝트를 모아놓았으며, 04-docker-fullstack-app 에서 최종적으로 구현하는 페이지는 NodeJS 서버와 ReactJS 프론트로 구성됩니다. 현재, AWS 비용으로 서버를 유지하지 않으므로 페이지를 로드할 수 없습니다. 단, 각각의 프로젝트는 실행 가능하며 테스트할 수 있습니다.

## 빌드 및 실행 방법

모든 명령은 터미널을 통해 실행하며 디렉토리별로 접근해 각각 실행할 수 있습니다.

- 01-docker-hello
  - run : node server.js
- 02-docker-compose :
  - run : node server.js
- 03-docker-react-app :
  - build : npm run build
  - run : npm run start
- 04-docker-fullstack-app  
  backend, frontend 각각 에 대하여
  - backend
    - run : node server.js
  - frontend
    - build : npm run build
    - run : npm run start

## 프로젝트별 학습 구성

### 01-docker-hello

Docker 의 기본 Hello world!

- docker image genarate
- docker image naming
- docker run
  - volumn
- docker file define
  - FROM, RUN, CMD
  - working directory

### 02-docker-compose

Docker 컨테이너들의 정의와 실행, 그리고 통신은?

- docker-compose
  - up [option -d, --build]
  - down
- container in redis & container in node servier

### 03-docker-react-app

Docker with react

- how to run react with docker
  - package.json - script & docker file CMD
- react hot load with docker volumn
- production env with nginx container
- no more long docker run command, just use docker-compose up

### 04-docker-fullstack-app

- project design
  - nginx (reverse proxy)
  - nginx (static resource serving)
  - react (frontend)
  - nodejs (backend)
  - AWS RDS (database)
- .travis.yml
  - sudo
  - language
  - services
  - before_install
  - script
  - after_success
  - deploy
- docker-compose.yml with AWS EB setting

## 해결된 이슈

- react-scripts 4.0.x 버전에서 배포시 블로킹 되는 현상(버전 다운그레이드)
- react hot load 가 작동하지 않는 현상(config env에 설정 추가)

## 해결되지 않은 이슈

- jest 의 테스트 hot load 가 작동하지 않음
