

	
// JavaScript Document

function recip(cde)	{
	
 sl = cde
	
switch (sl) {
		

		
	
	case "b6":  //Maine
	


mx = new Array("<strong>Capitol</strong>: Augusta","<strong>Governor</strong>: Janet Mills","<strong>Population:</strong> 1.341 million",     
			   "<strong>Size</strong>: 35,385 mi²", "<strong>Founded</strong>: March 15, 1820", "<strong>Description</strong>: Maine's long rocky Atlantic Coast is known for its frigid waters and an ample fishery – most famed for the Maine lobster. The state also is known for more than 40,000 acres of wild blueberries.",
			   
			   "<a href='https://visitmaine.com'> Visit Maine </a>")
		
wt = new Array()
dr = new Array()


bk = "#008";  
fg = "#fff"
mb = "images/maineCap.jpg"
im1 = "images/maineBird.jpg"
im2 = "images/maineFlower.jpg" 
tt = "Maine"
cap = "State Capitol: Augusta"
bird = "State Bird: Black-capped chickadee"
flower = "State Flower: White Pine Cone"
		
break; 
		
   case "b2":  //New Hampshire
		
wt = new Array(" 1 table spoon ketchup","1 table spoon of your favorite mustard","1/2 tablespoon honey")
dr = new Array("8 hot dogs","1 package of Pillsbury crescent rolls")
		
mx = new Array("<strong>Capitol</strong>: Concord","<strong>Governor</strong>: Chris Sununu","<strong>Population:</strong> 1.355 million",     
			   "<strong>Size</strong>: 9,349 mi²", "<strong>Founded</strong>: January 5, 1776", "<strong>Description</strong>: It's commonly known as the Granite State for its extensive granite formations and quarries, but also has three other nicknames: Mother of River, the White Mountain State and Switzerland of America.May 24, 2019",
			   
			   "<a href='https://www.visitnh.gov'> Visit Rhode Island </a>")

bk = "#008"; 
fg = "#fff"
mb = "images/newCAp.jpg"
im1 = "images/newBird.jpg"
im2 = "images/newFlower.jpg"
tt = "New Hampshire"
cap = "State Capitol: Concord"
bird = "State Bird: Purple finch"
flower = "State Flower: Purple lilac"
		
		
break; 
		
   case "b3":  //Vermont
		
wt = new Array()
dr = new Array()
		
mx = new Array("<strong>Capitol</strong>: Montpelier","<strong>Governor</strong>: Phil Scott","<strong>Population:</strong> 624,340",     
			   "<strong>Size</strong>: 9,616 mi²", "<strong>Founded</strong>: March 4, 1791", "<strong>Description</strong>: Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes.",
			   
			   "<a href='https://www.visit-vermont.com/state/'>Visit Vermont</a>")
bk = "#008"; 
fg = "#fff"
mb = "images/vermontCap.jpg"
im1 = "images/vermontBird.jpg"
im2 = "images/vermontFlower.jpg"
tt = "Vermont"
cap = "State Capitol: Montpelier"
bird = "State Bird: Hermit Thrush"
flower = "State Flower: Red Clover"
		
		
break; 
		
   case "b4":  //Massachusetts
		
wt = new Array()
dr = new Array()
		

mx = new Array("<strong>Capitol</strong>: Boston","<strong>Governor</strong>: Charlie Baker","<strong>Population: </strong> 6.873 million",
			  
			   "<strong>Size</strong>: 10,565 mi²", "<strong>Founded</strong>: February 6, 1788", "<strong>Description</strong>: Massachusetts is known for its many colleges and universities including Harvard University the first institution of higher learning in the country (founded in 1636). And Bay State residents value education: Massachusetts has the highest percentage of residents with a college degree in the nation.",
			  
			   "<a href='https://www.visitma.com'> Visit Massachusetts </a>")



bk = "#008"; 
fg = "#fff"
mb = "images/massCap.jpg"
im1 = "images/massBird.jpg"
im2 = "images/massFlower.jpg"
tt = "Massachusetts"
cap = "State Capitol: Boston"
bird = "State Bird: Chickadee"
flower = "State Flower: May Flower"
		
		
break; 
		
   case "b5":  //Rhode Island 
		
wt = new Array()
dr = new Array()
		

mx = new Array("<strong>Capitol</strong>: Providence","<strong>Governor</strong>: Daniel McKee","<strong>Population:</strong> 1.058 million",     
			   "<strong>Size</strong>: 1,214 mi²", "<strong>Founded</strong>: May 4, 1776", "<strong>Description</strong>: Rhode Island is known for making silverware and fine jewelry. The world's largest bug is on the roof of New England Pest Control in Providence. It's a big blue termite, 58 feet long and 928 times actual termite size.",
			   
			   "<a href='https://www.visitri.com/state/'> Visit Rhode Island </a>")


bk = "#008"; 
fg = "#fff"
mb = "images/rhodeCap.jpg"
im1 = "images/rhodeBird.jpg"
im2 = "images/rhodFlower.jpg"
tt = "Rhode Island"
cap = "State Capitol: Providence"
bird = "State Bird: Rhode Island Red"
flower = "State Flower: Common blue violet"
	
break; 
		
   case "b1":  //Connecticut
		
wt = new Array()
dr = new Array()

mx = new Array("<strong>Capitol</strong>: Hartford","<strong>Governor</strong>: Ned Lamont","<strong>Population:</strong> 3.571 million",     
			   "<strong>Size</strong>:5,543 mi²", "<strong>Founded</strong>: January 9, 1788", "<strong>Description</strong>: Connecticut Facts. Connecticut is known for its beautiful fall foliage, Yale University, and being the home of ESPN, the famous American cable sports channel.",
			   
			   "<a href='https://www.visitconnecticut.com/state/'> Visit Conneticut </a>")


bk = "#008"; 
fg = "#fff"
mb = "images/conneticutCap.jpg"
im1 = "images/connBird.jpg"
im2 = "images/connFlower.jpg"
tt = "Connecticut"
cap = "State Capitol: Hartford"
bird = "State Bird: American robin"
flower = "Mountain-laurel"
  
		
}

	
	document.getElementById("title").innerHTML=tt
	
	document.getElementById("cap").innerHTML=cap
	
	document.getElementById("bird").innerHTML=bird
	
	document.getElementById("flower").innerHTML=flower
	
	
	document.getElementById("dry").style.color=fg; 
	document.getElementById("dry").style.padding="20px"; 
	document.getElementById("dry").innerHTML=dr.join("<br/>"); 
	
	document.getElementById("mix").style.color=fg;  
	document.getElementById("mix").style.padding="20px";
	document.getElementById("mix").innerHTML=mx.join("<br/>"); 
	
    document.getElementById("pic1").src = mb
	document.getElementById("pic2").src = im1
    document.getElementById("pic3").src = im2
	
	document.getElementById("link").innerHTML=lk
	
	
	
}
