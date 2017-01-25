function unitPlans(groupCode) {
 
 var unitId = "10UZc9FAydiSsilreXIlm5FZbz6uRhqhamvbnTGHAX20";  //id of Myp units database spreadsheet
 var unitOverview = getUnits(groupCode,unitId);
  
 var interdiscunitId = "1UOq-5G3K60cMo8EyFvjfBJeaCdZ-gCJ_sNmQSx38SBA";  //id of Myp units database spreadsheet
 var interdiscunitOverview = getUnits(groupCode,interdiscunitId);
  
 var allunitOverviews = unitOverview.concat(interdiscunitOverview);
  
  Logger.log(allunitOverviews);

 return allunitOverviews;
  
}


function getUnits (groupCode,unitDatabaseId) {
  
 var ss = SpreadsheetApp.openById(unitDatabaseId);
 var sheet = ss.getSheetByName("uiList");
 var range = sheet.getDataRange();
 var numberColumns = range.getNumColumns();
 var data = range.getValues();
 var unitOverview;
  
  if (groupCode) {
     
  //uses online library here https://sites.google.com/site/scriptsexamples/custom-methods/2d-arrays-library
     unitOverview = ArrayLib.filterByText(data,-1, groupCode);  //array lib returns rows as arrays where group code appears
     unitOverview = ArrayLib.filterByText(unitOverview,-1, ["Live","LIVE", "COMPLETED"]);  //array lib returns only Units set to 'Live' as object[][]
  
  }
  
  else {
    
    var usersGroupsObjects = usersGroups();
    unitOverview = ArrayLib.filterByText(data,-1, usersGroupsObjects[0]);  //array lib returns rows as arrays where group code appears
    unitOverview = ArrayLib.filterByText(unitOverview,-1, ["Live","LIVE", "COMPLETED"]);  //array lib returns only Units set to 'Live' as object[][]
  
  }
  
  unitOverview = ArrayLib.sort(unitOverview, 6, false) //sorts so live units appear first *does not work!*
  
 return  unitOverview;
  
}

