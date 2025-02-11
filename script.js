function moveNavHover(navNum) {
	const element = document.getElementById('navHover');

	if (navNum == 1) {
		const currentRight = parseFloat(
			window.getComputedStyle(element).right,
		); // Get current right value
		const translateX =
			320 > currentRight
				? 320 - currentRight
				: currentRight - 320; // Calculate required translation

		element.style.transform = `translateX(${translateX}px)`; // Apply translation
	}
	if (navNum == 2) {
		const currentRight = parseFloat(
			window.getComputedStyle(element).right,
		); // Get current right value
		const translateX =
			205 > currentRight
				? 205 - currentRight
				: currentRight - 205; // Calculate required translation

		element.style.transform = `translateX(${translateX}px)`; // Apply translation
	}
	if (navNum == 3) {
		const currentRight = parseFloat(
			window.getComputedStyle(element).right,
		); // Get current right value
		const translateX =
			105 > currentRight
				? 105 - currentRight
				: currentRight - 105; // Calculate required translation

		element.style.transform = `translateX(${translateX}px)`; // Apply translation
	}
	if (navNum == 4) {
		const currentRight = parseFloat(
			window.getComputedStyle(element).right,
		); // Get current right value

		const translateX =
			15 > currentRight
				? 15 - currentRight
				: currentRight - 15; // Calculate required translation

		element.style.transform = `translateX(${translateX}px)`; // Apply translation
	}
}
