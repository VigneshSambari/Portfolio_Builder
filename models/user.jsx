import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  }
});


let User ;

if(models && models.User){
  User=models.User;
}
else{
  User=model("User", UserSchema);
}

export default User;