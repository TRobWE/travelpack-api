// const { authenticate } = require('feathers-authentication').hooks;
// const postmessage = require('../../hooks/postmessage.js');
const { populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [ 
      // populate({
      //   schema: {
          // include: [{
          //   service: 'users',
          //   nameAs: 'user',
          //   parentField: 'userId',
          //   childField: '_id',
          // }],
      //   },
      // }),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
