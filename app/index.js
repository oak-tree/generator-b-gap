'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var phonegap = require('phonegap');

var BGapGenerator = module.exports = function BGapGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.appname = 'betoven'
  this.phoneGapDir = this.appname;
  
  // for hooks to resolve on mocha by default
  options['test-framework'] = this.testFramework;
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
  
  
  this.basefiles = [];
  
  this.basefiles.push('.gitignore');
  this.basefiles.push('Gruntfile.js');
  this.basefiles.push('bower.json');
  this.basefiles.push('.jshintrc');
  this.basefiles.push('package.json');
  this.basefiles.push('.bowerrc');
  this.basefiles.push('README.md');
 
};

util.inherits(BGapGenerator, yeoman.generators.Base);

BGapGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;
	this.includeCompass = false//hasFeature('includeCompass');
    this.includeBootstrap = false//hasFeature('includeBootstrap');
    this.includeModernizr = false//hasFeature('includeModernizr');

	
    cb();
  }.bind(this));
  
  
};

BGapGenerator.prototype.managerFiles = function managerFiles() {


	for (var i = 0 ; i < this.basefiles.length - 1 ; i++ ) 
		this.copy(this.basefiles[i],this.basefiles[i]);
  
  //	path.join(this.sourceRoot(), source)
  
};

BGapGenerator.prototype.strcture = function structure() {
  this.directory('structure','www-source');
};

BGapGenerator.prototype.phoneGap = function phoneGap() {
   phonegap.create({ path: this.phoneGapDir });

};