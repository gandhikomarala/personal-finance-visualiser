all: install build test

install:
	cd backend && pip install -r requirements.txt
	cd frontend && npm install

build:
	cd frontend && npm run build

test:
	cd backend && pytest
	cd frontend && npm test

run:
	uproc-runner start
