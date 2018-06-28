function setup()
{
	tf.tensor([1, 2, 3, 4]).print();
	tf.tensor2d([1, 2, 3, 4], [2, 2]).print();
	mic = new p5.AudioIn()
  mic.start();
	i=0;
}
function draw()
{

	background(0);
  micLevel = mic.getLevel();

	if(i<999)
	{
	tf.scalar(micLevel).print(); //prints the amplitude values of the audio samples
	i++;
	}

	ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}


function scrollWindow(x, y) //function used to scroll through the page
{
    window.scrollBy(x, y);// x is horizontal and y is vertical
}
