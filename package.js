Package.describe({
  name: 'makalu:hubspot-tether',
  version: '0.0.1',
  summary: "HubSpot's Tether packaged for Meteor",
  git: 'https://github.com/makalu/meteor-hubspot-tether.git',
  documentation: 'README.md'
});

Npm.depends({ 'tether': '1.1.0' });

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('hubspot-tether.js');
});
