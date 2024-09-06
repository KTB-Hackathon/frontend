FROM node:18-slim

# 작업 디렉토리 생성
WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm

# 의존성 파일(package.json 및 pnpm-lock.yaml) 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install

# 나머지 프로젝트 파일 복사
COPY . .

# 프로젝트 빌드
RUN pnpm run build

# 앱이 사용할 포트 번호 지정
EXPOSE 5173

# 애플리케이션 실행
CMD ["pnpm", "start"]