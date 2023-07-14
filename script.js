const canvas = document.getElementById('my_canvas');
const context = canvas.getContext('2d');

function generateImage() {
  const imageSrc = document.getElementById('imageSrc').value;
  const imageText = document.getElementById('imageText').value;
  const headerText = document.getElementById('headerText').value;
  const footerText = document.getElementById('footerText').value;

  const img = new Image();
  img.onload = function() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing new image
    context.drawImage(img, 4, 4, canvas.width, canvas.height);

    context.font = '3em Impact, fantasy';
    context.fillStyle = 'green'; 
    context.fillText(headerText, 150, 45);
    context.fillText(imageText, 150, 170);
    context.fillText(footerText, 140, 290);
  };
  img.src = imageSrc;
}

function downloadImage() {
  const link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'image.png';
  link.click();
}

const generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', generateImage);

const downloadButton = document.getElementById('downloadBtn');
downloadButton.addEventListener('click', downloadImage);
