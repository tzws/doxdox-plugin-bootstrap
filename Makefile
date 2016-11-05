test:
	doxdox index.js --layout index.js | diff test/fixtures/documentation.html -

fixtures:
	doxdox index.js --layout index.js --output test/fixtures/documentation.html

docs:
	doxdox index.js --layout markdown --output DOCUMENTATION.md

.PHONY: test
