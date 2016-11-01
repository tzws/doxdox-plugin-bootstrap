test:
	doxdox index.js --layout bootstrap | diff test/fixtures/documentation.html -

fixtures:
	doxdox index.js --layout bootstrap --output test/fixtures/documentation.html

docs:
	doxdox index.js --layout markdown --output DOCUMENTATION.md

.PHONY: test
