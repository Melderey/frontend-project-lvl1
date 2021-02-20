install:
	npm install

publish:
	npm publish --dry-run	

lint:
	npx eslint .

fix:
	npx eslint --fix .

	brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gсd:
	node bin/brain-gсd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js