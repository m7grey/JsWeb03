window.onload = function () {
    
    new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });
    
	new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 2000
    });
}


function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
		
	this.auto = obj.auto;
		
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;

	// standard hack left or right parameter
    this.rate = obj.rate || 1000;
	
	var i = 0;
    // context focus this
    var slider = this;

	this.prev = function () {
		slider.images[i].classList.remove('showed');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images[i].classList.add('showed');
	}

	this.next = function () {
		slider.images[i].classList.remove('showed');
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images[i].classList.add('showed');
	}
	
    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;
		
	if(slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
}
