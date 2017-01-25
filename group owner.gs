//returns comma delimited string of emails of owners of given group, for emailing teachers via mail button

function groupOwner(group) {
  
  //test var group = "design-m1d-de1-1617@dwightlondon.org";
  var owners = "";
  
//can't get owner becasue memebers do not have permissions
  
//  var groupObject = GroupsApp.getGroupByEmail(group);
//  var users = groupObject.getUsers();
//  
//     for (var i = 0; i < users.length; i++) {
//       if (groupObject.getRole(users[i].getEmail()) == GroupsApp.Role.OWNER) {
//           owners = owners + users[i].getEmail() + ", ";
//       }
//     }
  
  var groupCode = group.split("@");
  var calendar = CalendarApp.getCalendarsByName(groupCode[0]);
  
  var calId = calendar[0].getId();
  
  var calUrl = "https://calendar.google.com/calendar/embed?src="+calId;
  
  var groupInfo = { owners: owners, calendarLink: calUrl };
  
  return groupInfo;
  
}
