		var Window;
		
		// Function that open the new Window
		function windowOpen() {
			Window = window.open(
				"https://www.google.com/",
				"_blank");
		}
		
		// function that Closes the open Window
		function windowClose() {
			Window.close();
		}
        for (let i = 0; i < 10; i++) {
            windowOpen()
            Window.close();
    }
