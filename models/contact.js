module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    // firstName (VARCHAR, NOT NULL, between 1-30 characters)
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    // lastName (VARCHAR, NOT NULL, between 1-30 characters)
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    // contactType (VARCHAR, Default value "Personal")
    contactType: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    // phoneNumber (VARCHAR, NULL, length 10 characters, numbers only)
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 10],
        is: /^[0-9]+$/
      }
    },
    // emailAddress (VARCHAR, NULL, must be valid email format)
    emailAddress: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  });
  // be sure to return the model!
  return Contact;
};
