var tronSoljsonSources = [
  "0.4.25_Odyssey_v3.2.3.js",
  "soljson_v1.js",
  "soljson_v2.js",
  "soljson_v3.js"
];
var tronSoljsonReleases = {
  "0.4.25_Odyssey_v3.2.3": "0.4.25_Odyssey_v3.2.3.js",
  "Tronbox SolcjsV1": "soljson_v1.js",
  "Tronbox SolcjsV2": "soljson_v2.js",
  "Tronbox SolcjsV3": "soljson_v3.js",

};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': tronSoljsonSources,
    'releases': tronSoljsonReleases 
  };