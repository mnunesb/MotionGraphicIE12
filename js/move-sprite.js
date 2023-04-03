// Thanks to http://www.codesynthesis.co.uk/code-snippets/move-an-element-with-arrow-keys-using-jquery
$(document).ready(function () {
	/* STEP 6a: Capture the keydown event for moving the sprite */
	document.addEventListener("keydown", function (e) {


		/* STEP 8a: Build out the cases for each of the arrow keys */
		var key_code = e.keyCode;
		switch (key_code) {
			case 37:
				this.getElementById("dude").className = "left";
				break;
			case 38:
				this.getElementById("dude").className = "up";
				break;
			case 39:
				this.getElementById("dude").className = "right";
				break;
			case 40:
				this.getElementById("dude").className = "down";
				break;
		}
		/* STEP 8b: Return false so keys don't return anything */
		return false;
		/* STEP 6b: Close out the keydown event anonymous function */
	});
	/* STEP 7a: Capture the keyup event to stop the sprite */
	document.addEventListener("keyup", function (e) {
		this.getElementById("dude").className = "go";
		/* STEP 7b: Close out the keyup event anonymous function */
	});

});
