# TypeScript_prac2

<aside>
<img src="/icons/forward_orange.svg" alt="/icons/forward_orange.svg" width="40px" /> 프로젝트 세팅🙂

1. 프로그램이 위치할 프로젝트 디렉토리를 새로 만들기

1. 해당 디렉토리에 가서 다음의 명령어들을 **복사 + 붙여넣기**해서 터미널에서 실행
    
    ```bash
    npm init -y
    ```
    
    ```bash
    tsc --init --rootDir ./src --outDir ./dist --esModuleInterop --module commonjs --strict true --allowJS true --checkJS true
    ```
    
    - `--rootDir ./src`
        - 프로그램의 소스 파일이 들어가는 경로는 src 디렉토리입니다.
    - `--outDir ./dist`
        - 컴파일이 된 파일들이 들어가는 디렉토리는 dist 디렉토리입니다.
    - `--esModuleInterop`
        - CommonJS 방식의 모듈을 ES모듈 방식의 import 구문으로 가져올 수 있습니다!


1. package.json의 “scripts” 항목을 다음과 같이 변경 TypeScript 프로젝트 실행을 편하게 하고자 함
    
    ```json
    "scripts": {
        "start": "tsc && node ./dist/index.js",
        "build": "tsc --build",
        "clean": "tsc --build --clean"
    },
    ```
    

1. 이제 여기서 **src 디렉토리도 생성**
    
    
2. 이제, 해당 디렉토리 위치를 기반으로 편집기를 열어서 코딩 준비
</aside>
