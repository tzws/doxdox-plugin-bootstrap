BIN=node_modules/.bin

test:
	make lint
	doxdox index.js --layout markdown | diff DOCUMENTATION.md -
	doxdox index.js --layout index.js | diff test/fixtures/documentation.html -

lint:
	$(BIN)/eslint index.js
	$(BIN)/eslint helpers.js

fixtures:
	doxdox index.js --layout index.js --output test/fixtures/documentation.html

docs:
	doxdox index.js --layout markdown --output DOCUMENTATION.md

.PHONY: test
