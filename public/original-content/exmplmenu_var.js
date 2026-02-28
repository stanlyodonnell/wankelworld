/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.41 24 December 2001	          *
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=12;			// Number of first level items
	var LowBgColor='Darkviolet';			// Background color when mouse is not over
	var LowSubBgColor='Darkviolet';			// Background color when mouse is not over on subs
	var HighBgColor='Mediumorchid';			// Background color when mouse is over
	var HighSubBgColor='Mediumorchid';		// Background color when mouse is over on subs
	var FontLowColor='Yellow';			// Font color when mouse is not over
	var FontSubLowColor='yellow';			// Font color subs when mouse is not over
	var FontHighColor='yellow';			// Font color when mouse is over
	var FontSubHighColor='yellow';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=2;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=11;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='center';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';			// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.1;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=20;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=0;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='contents';			// Frame where first level appears
	var SecLineFrame='main';			// Frame where sub levels appear
	var DocTargetFrame='_parent';			// Frame where target documents appear
	var TargetLoc='MenuPos';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","http://www.drmaz.com/home.htm","",0,28,150);

Menu2=new Array("What's New","http://www.drmaz.com/Whats_New.htm","","");
	
Menu3=new Array("Felix Wankel","http://www.drmaz.com/Felix_Wankel/Felix_wankel.htm","","");
	
Menu4=new Array("Dr. Maz Shop","http://www.drmaz.com/Drmaz_shop.htm","",2);
	Menu4_1=new Array("Mazdaspeed Products","http://www.drmaz.com/Drmaz_shop/Mazdaspeed/Mazdaspeed_Products.htm","",1,20,180);
        	Menu4_1_1=new Array("Mazdaspeed Merchandise","http://www.drmaz.com/Drmaz_shop/Mazdaspeed/Merchandise/Mazdaspeed Merchendise.htm","",0,20,200);
	Menu4_2=new Array("Books","http://www.drmaz.com/Drmaz_shop/Memorabilia/books/books.htm","",0,20,180);

Menu5=new Array("Events","http://www.drmaz.com/Events/resent_events_.htm","",1);
	Menu5_1=new Array("Mazda Festa","http://www.drmaz.com/Events/Mazda_Festa/2002/Mazda_Festa_2002.htm","",0,20,100);

Menu6=new Array("Mazda","http://www.drmaz.com/mazda/mazda.htm","",1);
	Menu6_1=new Array("Mazda Rotary","http://www.drmaz.com/mazda/mazda.htm","",3,20,120);
        	Menu6_1_1=new Array("Mazda at the races","http://www.drmaz.com/mazda/Mazda_Race/Race_day_Mazda.htm","",1,20,155);
			Menu6_1_1_1=new Array("Mazda at Le Mans","http://www.drmaz.com/mazda/Mazda_Race/lemas/Mazda_ at_ Le Mans.htm","",0,20,150);
		Menu6_1_2=new Array("Mazda RX-7","http://www.drmaz.com/mazda/rx-7/rx7.htm","",2,20,150);
			Menu6_1_2_1=new Array("Mazda RX-7 FC3S","http://www.drmaz.com/mazda/rx-7/rx7_fc/mazda_rx-7_fc3s.htm","",1,20,150);
				Menu6_1_2_1_1=new Array("Mazda RX-7 FC3S Convertible","http://www.drmaz.com/mazda/rx-7/rx7_fc/RX7_convertible.htm","",0,20,150);
			Menu6_1_2_2=new Array("Mazda RX-7 FD SP","http://www.drmaz.com/mazda/rx-7/RX-7_FD/mazda_RX-7_SP/RX7_FD_SP.htm","",0,20,150);
		Menu6_1_3=new Array("Mazda's Unusual Rotaries","http://www.drmaz.com/mazda/Mazda_unusal/unusal_mazdas.htm","",3,20,150);
				Menu6_1_3_1=new Array("Mazda Parkway Bus","http://www.drmaz.com/mazda/Mazda_unusal/Park_Way/mazda_Parkway_Bus.htm","",0,20,150);
				Menu6_1_3_2=new Array("Mazda Mazda Road Pacer","http://www.drmaz.com/mazda/Road_Pacer/Road_Pacer.htm","",0,20,150);
				Menu6_1_3_3=new Array("Mazda RX-9","http://www.drmaz.com/mazda/rx-9/mazda_rx9.htm","",0,20,150);	
	
Menu7=new Array("Memorbilia","http://www.drmaz.com/Memorabilia/Memorabilia.htm","",1);
	Menu7_1=new Array("Plastic Model Kits","http://www.drmaz.com/Memorabilia/Plastic_Kits/plasticmodel_kits.htm","",0,20,120);


Menu8=new Array("Fun Stuff","http://www.drmaz.com/Fun_stuff/Fun_Stuff.htm","",1);
	Menu8_1=new Array("Wallpaper","http://www.drmaz.com/Fun_stuff/Wall_Paper/wall_paper.htm","",2,20,120);
		Menu8_1_1=new Array("Mazda RX-7 Wallpaper","http://www.drmaz.com/Fun_stuff/Wall_Paper/RX-7/RX-7_FD/RX-7FD_Wallpaper.htm","",0,20,155);
		Menu8_1_2=new Array("Mazda RX-8 Wallpaper","http://www.drmaz.com/Fun_stuff/Wall_Paper/RX-8/RX-8_wallpaper.htm","",0,20,155);

Menu9=new Array("Classified Ads","http://pub46.bravenet.com/classified/show.php?usernum=3927607325&cpv=1","","");

Menu10=new Array("Mazda Forum","http://pub46.bravenet.com/forum/show.php?usernum=3927607325&cpv=1","","");

Menu11=new Array("Thanks","http://www.drmaz.com/thanks.htm","","");

Menu12=new Array("Links","http://www.drmaz.com/Links.htm","","");
	