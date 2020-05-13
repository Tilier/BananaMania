let parallax_sections = document.querySelectorAll('.js-parallax-section');
for (let parallax_section of parallax_sections) {
	_from = parallax_section.getAttribute("data-from") || '0px';
	_to = parallax_section.getAttribute("data-to") || '100px';
	let instance = basicScroll.create({
		elem: parallax_section,
		from: 'bottom-bottom',
		to: 'top-top',
		direct: true,
		props: {
			'--r': {
				from: '0',
				to: '1.3turn',
			},
			
			'--m': {
				from: "-60vw",
				to: "60vw",
            },
		}
    })
    
    let instanceT = basicScroll.create({
		elem: parallax_section,
		from: 'bottom-bottom',
		to: 'top-top',
		direct: true,
		props: {
			'--f': {
				from: _from,
				to: _to,
            },

            '--ro': {
				from: '0',
				to: '30deg',
            },
        }
	})

    instance.start();
    instanceT.start();
}