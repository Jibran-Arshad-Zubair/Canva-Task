
    
    const canvas = document.getElementById('my_canvas');
    const context = canvas.getContext('2d');

    
    const imageSrc = prompt(' PLease Enter the url add of image :');
    const imageText = prompt(' Please Enter text for the image:');
    const header_text = prompt(' Please Enter the text for the header:');
    const footer_text = prompt('Please Enter the text for the footer:');

    
    const headerTextElement = document.getElementById('header');
    headerTextElement.innerText = header_text;

    const footerTextElement = document.getElementById('footer');
    footerTextElement.innerText = footer_text;

    
    const img = new Image();
    img.onload = function() {
      context.drawImage(img, 4, 4, canvas.width, canvas.height);

       context.font = '3em Impact, fantasy ';
context.fillStyle = 'green'; 
      context.fillText(imageText, 50, 50);
    };
    img.src = imageSrc;

  
    function downloadImage() {
      const link_1 = document.createElement('a');
      link_1 .href = canvas.toDataURL();
      
      link_1 .download = 'image.png';
      link_1 .click();
    }

    
    const button = document.getElementById('Btn');
    button.addEventListener('click', downloadImage);
