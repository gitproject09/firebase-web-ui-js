var database = firebase.database();

//Write Data
function writeUserData(userId, name, phone, email) {
 firebase.database().ref('users/' + userId).set({
  name: name,
  phone: phone,
  email: email
 }).then(()=>{
  console.log("Writed");
 }, (onRejected)=>{
  console.log(onRejected);
 });
}

writeUserData(1, "Sopan", "1234567896321", "spn.ahmed@gmail.com");
writeUserData(1, "Sopan", "1234567896321", "spn.ahmed@gmail.com");