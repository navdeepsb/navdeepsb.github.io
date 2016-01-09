$( document ).ready( function() {
	// Variables:
	var badger  = Badger();
	var counter = 0;

	// Constants:
	var BADGER_TYPES     = [ "success", "warn", "error", "anything-else" ];
	var BADGER_TYPES_LEN = BADGER_TYPES.length;

	// Initialize Badger:
	badger.init({
		theme: {
			success: {
				background  : "#aee239",
				borderColor : "#aee239"
			},
			warn: {
				background: "#fc913a",
				borderColor: "#fc913a"
			},
			error: {
				background: "#fe4365",
				borderColor: "#fe4365"
			}
		}
	});

	// Helper functions:
	var getRandomNum = function( min, max ) {
		return Math.floor( Math.random() * ( max - min ) ) + min;
	};


	$( ".show-badger" ).on( "click", function( e ) {
		e.preventDefault();

		switch( counter ) {
			case 0:
				badger.show( "Hey there! Keep on tapping for more Badgers.<br />Tap on me to make me go away...", { persist: true } );
				break;
			case 1:
				badger.show( "So, you like Badger, huh? :)", "warn" );
				break;
			default:
				badger.show( "This is badger no. " + ( counter + 1 ), BADGER_TYPES[ getRandomNum( 0, BADGER_TYPES_LEN ) ] );
				break;
		}

		counter++;
	});
});