var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    admin:{ type:Boolean, default:false}
  },
  { timestamps: true }
);

UserSchema.pre('save', function(next) {
  var user = this, SALT_FACTOR = 5;
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    console.log(password)
    cb(null, isMatch);
    console.log(isMatch)
  });
}

module.exports = mongoose.model('User', UserSchema);
