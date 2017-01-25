function calendarEvents(group) {
  
  group = "Design-M1d-De1-1516";
  
 var now = new Date();
 var weekFromNow = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
 var calendars = CalendarApp.getCalendarsByName(group);
 var events = calendars[0].getEvents(now, weekFromNow);
 var calId = calendars[0].getId();
  
  var eventDetails = events.map(function(value, index) {
    
    var desc = value.getDescription();
    var title = value.getTitle();
    var end = new Date(value.getEndTime()).toString();
    var day  = end.split(" ");
    var daysToEnd = Math.round((end - now.getTime()) / (3600000*24));

    return {title : title , desc : desc, date : day[0].concat(" ",day[1]," ",day[2]) };
 
  });
  
  eventDetails.push(calId);
  
  Logger.log( eventDetails);
  
}
