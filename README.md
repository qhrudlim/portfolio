# Portfolio

React와 Vite로 만든 개인 포트폴리오 웹사이트입니다.
프로젝트 경험, 기술 역량, 활동 타임라인, 프로젝트별 문제 해결 과정을 한 곳에서 확인할 수 있도록 구성했습니다.

## Overview

- React + Vite 기반 SPA
- HashRouter 기반 GitHub Pages 배포 대응
- 프로젝트 기간 기반 타임라인 UI
- Team / Personal / Open Source 프로젝트 필터링
- 프로젝트 상세 페이지의 역할, 기술, 문제 해결 과정, 회고 정리
- Skills 섹션의 기술별 숙련도 및 상세 설명 모달
- GitHub Actions 기반 자동 배포

## Features

### Projects

프로젝트를 기간 흐름에 맞춰 타임라인 형태로 보여줍니다.
카테고리 필터를 통해 팀 프로젝트, 개인 프로젝트, 오픈소스 기여를 구분해서 확인할 수 있습니다.

### Project Detail

각 프로젝트의 개요, 역할, 사용 기술, 담당 인원, 문제 해결 과정, 기여 내용, 회고를 상세히 정리했습니다.
`My Tech` 표시를 통해 직접 다룬 기술을 구분합니다.

### Skills

기술 카드를 클릭하면 모달에서 로고, 숙련도, 구현 가능 범위와 상세 설명을 확인할 수 있습니다.

### Timeline

교육, 자격증, 프로젝트, 경험을 시간 순서로 정리했습니다.

## Tech Stack

- React
- Vite
- React Router
- React Icons
- CSS
- ESLint
- GitHub Actions
- GitHub Pages

## Project Structure

```text
src
|-- assets/       # images and static assets
|-- components/   # page and UI components
|-- data/         # project, skill, timeline data
|-- styles/       # CSS split by page and feature
|-- utils/        # shared helper logic
|-- App.jsx       # route configuration
`-- main.jsx      # app entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deployment

이 사이트는 GitHub Pages를 통해 배포됩니다.
main 브랜치에 변경 사항이 push되면 GitHub Actions가 Vite 앱을 빌드하고 결과물을 자동으로 배포합니다.

Live site:

```text
https://qhrudlim.github.io/portfolio/
```

## Focus Points

- 프로젝트 목록은 빠르게 스캔할 수 있도록 간결하게 구성
- 상세 페이지는 전체 기술 스택과 직접 사용한 기술을 함께 확인할 수 있도록 설계
- 기술, 타임라인, 프로젝트 데이터를 UI 컴포넌트와 분리
- 반응형 환경에서 모달과 카드 레이아웃이 자연스럽게 동작하도록 조정
- 파일 역할에 따라 components, data, styles, utils 구조로 분리
