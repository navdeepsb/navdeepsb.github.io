$( document ).ready( function() {
	// Variables:
	var $html        = $( "html, body" );
	var $sections    = $( "section" );
	var headerHeight = $( ".header" ).height();

	// Constants:
	var SCROLL_INTERVAL = 0.8; // in seconds


	$( "#jumper" ).on( "change", function( e ) {
		var $this = $( this );
		var val   = parseInt( $this.val(), 10 );
		$html.animate({
			scrollTop: $sections.eq( val + 1 ).offset().top - headerHeight
		}, SCROLL_INTERVAL * 1000 );
		$this.val( "-1" );
	});

	$( ".drawing__card" ).on( "click", function( e ) {
		e.preventDefault();
		var imgs = $( this ).data( "imgs" ) || [];
		if( typeof imgs === "string" ) {
			imgs = JSON.parse( imgs );
		}
		$.swipebox( imgs, {
			loopAtEnd: true
		});
	});

	$( ".toggle" ).on( "click", function( e ) {
		e.preventDefault();
		var $this      = $( this );
		var target     = $this.data( "target" );
		var isRevealed = $this.data( "revealed" );

		$( target ).slideToggle( "fast" );
		$this.text( ( isRevealed ? "view" : "hide" ) + " details" );
		$this.data( "revealed", !isRevealed );
	});
});