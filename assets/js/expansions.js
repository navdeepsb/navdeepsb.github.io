var expansions = [
	"never sing (in) bathroom",
	"new subway burger",
	"nerds' super bowl",
	"nice sunglasses, bro",
	"need some booze",
	"ninjas snore boldly",
	"now say bazinga",
	"new subatomic boson",
	"now streaming beegees",
	"never stop breathing"
];

var expansionElem = document.querySelector( ".expansion" );

var generateRandomNum = function( min, max ) {
	return Math.floor( Math.random() * max ) + min;
};

var setExpansion = function() {
	expansionElem.innerText = expansions[ generateRandomNum( 0, expansions.length ) ];
};

setInterval( setExpansion, 3000 );

setExpansion();