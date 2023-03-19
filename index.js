let appID = "APP_ID";
let region = "APP_REGION";
let appSetting = new CometChat.AppSettingsBuilder()
                    .subscribePresenceForAllUsers()
                    .setRegion(region)
                    .autoEstablishSocketConnection(true)
                    .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  }, error => {
    console.log("Initialization failed with error:", error);
  }
);


function createuser(username)
{
let username = document.getElementById('username').value
console.log('username',username)
let authKey = "AUTH_KEY";
var UID = "username";
var name = "username";

var user = new CometChat.User(UID);

user.setName(name);

CometChat.createUser(user, authKey).then(
 user => {
    var UID = "SUPERHERO1";
var authKey = "AUTH_KEY";

CometChat.getLoggedinUser().then(
(user) => {
            if(!user){
        CometChat.login(UID, authKey).then(
          user => {
            console.log("Login Successful:", { user });  
            document.getElementById('login-prompt').style.display="name";  
            document.getElementById('chat-window').style.display="block";
            document.getElementById('your-username').innerHTML.user.name;  
          }, error => {
            console.log("Login failed with exception:", { error });    
          }
        );
    }
    }, error => {
            console.log("Some Error Occured", { error });
    }
);
}
 )
}