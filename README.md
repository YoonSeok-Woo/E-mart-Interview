# [emartXSSAFY] Front-end Engineer 1차면접 사전과제

### json-server 실행

`json-server --host 192.168.1.8 data.json --routes routes.json --port 8080`

### SPA 실행

`npm i`

`npm run build`

`npm run start`

### 진행 내용

* API 통신을 사용하여 JSON 데이터를 가져와서 화면을 구성해주세요 . O
* 스크롤을 이용한 리스트 페이징 처리를 해주세요.(10개씩) O
* 메뉴 좌우 스크롤, 메뉴 클릭 시 데이터 필터링, 클릭된 메뉴 on/off 표시가 될 수 있도록 처리해주세요. O
* 스크롤 다운 메뉴 숨김/ 스크롤 업 메뉴를 표시해 주세요. O
* 화면 해상도에 따라 리스트 배열을 변경해주세요. (1열 -> 2열, 2열 -> 3열) X

### 특이사항

* JSON데이터를 가져와서 화면 구성하는 과정에서 Json-server를 활용했으나 배포하는 과정에서 Json-server를 활용하기가 마땅치 않아서 배포된 버전에서는 data.json파일을 import해와서 썼습니다.
* 카카오톡 브라우저로 모바일에서 열었을 경우 인피니티 스크롤기능이 잘 작동하지 않는 현상 확인(일반 핸드폰 인터넷 브라우저에선 정상작동)