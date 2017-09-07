var domains = require('disposable-email-domains');


const DomainCheck = {

  checkDomain: function (domainToCheck, cb) {

    var hasMatch = false;

    for (var index = 0; index < domains.length; ++index) {

      const domain = domains[index];

      if (domain.toLowerCase() === domainToCheck.toLowerCase()) {
        hasMatch = true;
        break;
      }
    }

    cb(null, hasMatch)

  },
};

module.exports = DomainCheck;