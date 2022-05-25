module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          email: String,
          password: Number
        },
        { timestamps: true }
      )
    );
    return User;
  };