# Amazon Vine Explorer UK

Makes the Amazon Vine Website even a bit better

![](vine_logo_notification_image.png)

## Description:

This script enhances the experience on the Amazon Vine website. However, it does not provide you with unfair and unintended advantages over other Vine Voices. For example, there will be no automated ordering based on keywords or price! We aim to operate 100% in compliance with the terms and conditions of Amazon Vine using this script.

## How to install:

* Install Tampermonkex: [https://www.tampermonkey.net/](https://www.tampermonkey.net/)
* Install Amazon Vine Explorer: [https://raw.githubusercontent.com/richardsevern/AmazonVineExplorer-uk/main/VineExplorer.user.js](https://raw.githubusercontent.com/richardsevern/AmazonVineExplorer-uk/main/VineExplorer.user.js)



## Changelog:

##### [11.12.2023] - Version 0.10.3.1
* Update TaxValue in Tile after opend details

##### [10.12.2023] - Version 0.10.3
* Added: Show of TaxInfoPrize inside Tileview
* BugFix: Fixed the bug that Backgroundscan didn´t request Taxdata correctly
* Added: Faster Product Removement if querry returns 'ITEM_NOT_IN_ENROLLMENT' except Favorites
* BugFix: Backgroundscan didn´t restore last state and begun at 0 each time

##### [09.12.2023] - Version 0.10.2.1
* BugFix: Fixed Endlessloop when changing from empty Potluck page to AVE internal page

##### [08.12.2023] - Version 0.10.2
* BugFix: Multiple Querrys after pressing More Details Button
* Improved reliability of Databae Cleanup
* PutLuck Products get removed from Database after one day now
* Added more Master Slave Session detection handling
* Added dead Sessions removement

##### [08.12.2023] - Version 0.10.0

* Changed DB_HANDLER from Callbacks to Promises
* BugFix: Tile Processing was faster then tile loading from Amazon => Added delayloop until all tiles are loaded
* Changed Tile Processor to Promises to increase reliability
* Added Button Colors to Usersettings
* Added the possibility to delete the database (USERSETTINGS)
* Added the possibility to export the database (USERSETTINGS)
* Added the possibility to import the database (USERSETTINGS)
* First Implementation of a Session Detection - Distinguishable by the branding in the bottom left
* Background Scan will not start if Session is not the Master Session
* BugFix: addTileEventhandlers() tryed to place favStar EventHandler to early, not we will wait until Star is there.
* Performance Improvement: Only search for keywords on New Products if there is at least one configured
* User Settings Menu. Schow Name of Setting as tooltip if noe description is set.

##### [06.12.2023] - Version 0.9.0

* Improved Search function to allow multiple keywords
* More improvemnts in the background for faster datahandling, renamed a few variables to fit to new shorthand name AVE, etc.
* Added Usersettings Page, and did a lot of stuff related to this.
* Added Back to Top Button on all subpages.

##### [04.12.2023] - Version 0.8.0

* Added Desktop Notifications
* Added the All Products Button for infinite scroll thru all the vine products
* The New Products Button shows the amount of new products
* Added new Button to left Side to set ALL Products to !isNew
* Added Indicators (left bottom corner) who shows Database aktivity, Database cleanup and Backgroundscan aktivity
* Added more Randomness for Backgroundscanner. Default Delay (4S) + 0-4S Per Dataquerry from Amazon
* Changed Database function for querry all entrys to increse the performance of this function
* Added "controlled delay" (Observer) to be safe for querry product tile elements (sometimes the parser was to fast and tryed to read not existing elements)
* Added function to querry product details from amazon and merge it with product database element
* Added Product Details Fetch to Backgroundscan
* a few little bugfixes

##### [01.12.2023] - Version 0.7.1

* A lot of Stuff will work, lets call it the initial version

##### [24.11.2023] - Version 0.1

* Start of this Project

