function evilTwin(obj) {
	return Object.create(obj, { hasGoatee: { value: true }});
}
