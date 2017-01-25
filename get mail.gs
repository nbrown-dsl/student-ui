//returns number of unread mail sent to group in array

function getUnreadMailNumbers(groupAddress) {

  var unreadNumbers = groupAddress.map( function(groupEmail) {
    
    var unreadThreads = GmailApp.search('is:unread to:'+groupEmail); //retrieves number of unread messages sent to group
    
    return unreadThreads.length;
  });
  
  return (unreadNumbers);
  
}

//DEPRECATED script that also returns message bodies for accordion

//function getMail(groupAddress) {
// 
//  var content = { threads:[], messageBodies:[]};
//  
//  var threads = GmailApp.search('is:unread to:'+groupAddress,0,4 ); //retrieves first 4 message threads sent to group
//  
//  if (threads.length >0) {
//  var messages = [];
//  var t = "";
// 
//  for (t=0; t<4; t++) {
//        
//    content.threads.push(threads[t].getFirstMessageSubject());
//    messages = threads[t].getMessages();
//    content.messageBodies.push(messages[0].getBody());
//    }
//    
//  }
//  
//  else { content = { threads:['No messages sent'], messageBodies:['Ask your teacher to send some!']}  }
//  
//  return (content);
//  
//}
