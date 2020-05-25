function updateProjectInfo(section, url, name) {
	section.insertAdjacentHTML(
		'beforeend',
		`<a href=${url} target="_blank"
        class="btn btn-lg form-control font-weight-bold mb-3">
        ${name}
    </a>`
	);
}
