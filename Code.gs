/**
 * Serves HTML web app.
 * provides looged in user with UI to see and navigate to resources related to group memberships
 * eg classes, units, mail to groups, feedback from marksheets
 *
 * @param {Object} e event parameter that can contain information
 *     about any URL parameters provided.
 */
function doGet(e) {
  var test="hello";
  var userName = Session.getActiveUser().getEmail().split("@");
  
  var template = HtmlService.createTemplateFromFile('Index');
      template.name = userName[0];
  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle(userName[0]+' units')
      .setFaviconUrl('http://www.iconsdb.com/icons/preview/persian-red/book-xxl.png')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

//returns users groups in various formats as array of objects, plus first element is array of group codes

function usersGroups() {
  
 var groups = GroupsApp.getGroups();
   
  var groupMembership = groups.map(function(groupie) {
    
    group = groupie.getEmail();
   
       var groupName = group.split("-");   //removes most of group code to make it less visually clutterd for user
       var groupCode = group.split("@");
       var groupObject = { groupEmail : group, groupName : groupName[0], groupCode : groupCode[0] };
       return groupObject;
 
  }); 
  
  
  
   var groupsObjects = groupMembership.filter(function(e) { return e.groupEmail.indexOf('1617') > -1 }); //removes groups that are not current year classes
  var allGroups = groupsObjects.map(function(e) { return e.groupCode }); 
  
  groupsObjects.unshift(allGroups); //prepends array with array of all groups codes to be used to present all units
  
  return groupsObjects;
 
}

