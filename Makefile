install:
	npm install

start:
	npx babel-node -- src/bin/brain-$(G).js

publish:
	npm publish

lint:
	npx eslint .
