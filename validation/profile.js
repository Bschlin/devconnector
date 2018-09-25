const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // DRY way of creating profile validations
  const siteUrls = [
    "website",
    "youtube",
    "twitter",
    "facebook",
    "linkedin",
    "instagram"
  ];
  const dataFields = ["handle", "status", "skills"];
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.email = "Handle must be between 2 and 40 characters";
  }
  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
    if (Validator.isEmpty(data[field])) {
      errors[field] = `${field} is required`;
    }
  });
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "";
    errors.email = "E-mail is required";
  }
  siteUrls.forEach(url => {
    if (!isEmpty(data[url])) {
      if (!Validator.isURL(data[url])) {
        errors[url] = `Badly formatted URL for ${url}`;
      }
    }
  });

  // ternary operator to test if something is empty, field must first be empty string

  // data.handle = !isEmpty(data.handle) ? data.handle : "";
  // data.status = !isEmpty(data.status) ? data.status : "";
  // data.skills = !isEmpty(data.skills) ? data.skills : "";
  // data.password = !isEmpty(data.password) ? data.password : "";

  // if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
  //   errors.handle = "Handle needs to be between 2 and 40 characters";
  // }

  // if (Validator.isEmpty(data.handle)) {
  //   errors.handle = "Profile handle is required";
  // }

  // if (Validator.isEmpty(data.status)) {
  //   errors.status = "Status field is required";
  // }

  // if (Validator.isEmpty(data.skills)) {
  //   errors.skills = "Skills field is required";
  // }

  // //Website isn't required but if its not empty, their must be a valid URL

  // if (!isEmpty(data.website)) {
  //   if (!Validator.isURL(data.website)) {
  //     errors.website = "Not a valid URL";
  //   }
  // }

  // //Youtube link isn't required but if its not empty, their must be a valid URL

  // if (!isEmpty(data.youtube)) {
  //   if (!Validator.isURL(data.youtube)) {
  //     errors.youtube = "Not a valid URL";
  //   }
  // }

  // if (!isEmpty(data.twitter)) {
  //   if (!Validator.isURL(data.twitter)) {
  //     errors.twitter = "Not a valid URL";
  //   }
  // }

  // if (!isEmpty(data.facebook)) {
  //   if (!Validator.isURL(data.facebook)) {
  //     errors.facebook = "Not a valid URL";
  //   }
  // }

  // if (!isEmpty(data.linkedin)) {
  //   if (!Validator.isURL(data.linkedin)) {
  //     errors.linkedin = "Not a valid URL";
  //   }
  // }

  // if (!isEmpty(data.instagram)) {
  //   if (!Validator.isURL(data.instagram)) {
  //     errors.instagram = "Not a valid URL";
  //   }
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
