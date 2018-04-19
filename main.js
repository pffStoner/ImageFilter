const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const dwnBtn = document.getElementById('download-btn');
const uplFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//add filters
document.addEventListener('click', (e) =>{
	if(e.target.classList.contains('filter-btn')){
		if(e.target.classList.contains('brightness-add')){
			Caman('#canvas',img, function(){
				this.brightness(5).render();
			});
		} else if(e.target.classList.contains('brightness-remove')){
			Caman('#canvas',img, function(){
				this.brightness(-5).render();
			});
		}
		else if(e.target.classList.contains('contrast-add')){
			Caman('#canvas',img, function(){
				this.contrast(5).render();
			});
		}
		else if(e.target.classList.contains('contrast-remove')){
			Caman('#canvas',img, function(){
				this.contrast(-5).render();
			});
		}
		else if(e.target.classList.contains('saturation-add')){
			Caman('#canvas',img, function(){
				this.saturation(5).render();
			});
		}
		else if(e.target.classList.contains('saturation-remove')){
			Caman('#canvas',img, function(){
				this.saturation(-5).render();
			});
		}
		else if(e.target.classList.contains('vibrance-add')){
			Caman('#canvas',img, function(){
				this.vibrance(5).render();
			});
		}
		else if(e.target.classList.contains('vibrance-remove')){
			Caman('#canvas',img, function(){
				this.vibrance(-5).render();
			});
		}//./
		else if(e.target.classList.contains('vintage-add')){
			Caman('#canvas',img, function(){
				this.vintage().render();
			});
		}//./
		else if(e.target.classList.contains('lomo-add')){
			Caman('#canvas',img, function(){
				this.lomo().render();
			});
		}//./
		else if(e.target.classList.contains('clarity-add')){
			Caman('#canvas',img, function(){
				this.clarity().render();
			});
		}//./
		else if(e.target.classList.contains('sincity-add')){
			Caman('#canvas',img, function(){
				this.sinCity().render();
			});
		}//./
		else if(e.target.classList.contains('cross-process-add')){
			Caman('#canvas',img, function(){
				this.crossProcess().render();
			});
		}//./
		else if(e.target.classList.contains('pinholo-add')){
			Caman('#canvas',img, function(){
				this.pinhole().render();
			});
		}//./
		else if(e.target.classList.contains('nostalgia-add')){
			Caman('#canvas',img, function(){
				this.nostalgia().render();
			});
		}//./
		else if(e.target.classList.contains('hermajesty-add')){
			Caman('#canvas',img, function(){
				this.herMajesty().render();
			});
		}//./
	}
});

//remove filters
revertBtn.addEventListener('click', e =>{
	Caman('#canvas', img, function(){
		this.revert();
	});
});


// Upload File
uplFile.addEventListener("change", () => {
  // Get 1st File
  const file = document.getElementById("upload-file").files[0];
  // Init FileReader API
  const reader = new FileReader();

  // Check for file
  if (file) {
    // Set file name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
  }

  //download
  dwnBtn.addEventListener('click', e =>{
  	//get file extension
  	const fileExtension = fileName.slice(-4);

  	let newFileName;

  	//check image type
  	if(fileExtension === '.jpg' || fileExtension === '.png'){
  		newFileName = fileName.substring(0, fileName.length-4) + '-edited.jpg';
  	}

  	download(canvas, newFileName);

  });

  //download function
  function download(canvas, fileName) {

  	let e;
  	const link = document.createElement('a');

  	//set properties
  	link.download = fileName;
  	link.href = canvas.toDataURL('image/jpeg', 0.8);

  	//new mouse event
  	e = new MouseEvent('click');
  	//dispatch event
  	link.dispatchEvent(e);
  }




  // Add image to canvas
  reader.addEventListener(
    "load",
    () => {
      // Create image
      img = new Image();
      // Set image src
      img.src = reader.result;
      // On image load add to canvas
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});

