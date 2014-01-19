# generator-b-gap [![Build Status](https://secure.travis-ci.org/oak-tree/generator-b-gap.png?branch=master)](https://travis-ci.org/oak-tree/generator-b-gap)

A generator for  [Yeoman](http://yeoman.io). to easly start a  backbone + phonegap project

this generator inspired by 3 projects

1. Best source for backbone tutorials on the web (http://coenraets.org/blog/2013/06/building-modular-mobile-phonegap-apps-with-backbone-js-requirejs-and-topcoat/)
2. https://github.com/jclem/generator-phonegap-backbone - use phoengap in nodejs to build project structure"
3. https://github.com/yeoman/generator-mobile - alot of grunt best practice from here!


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-b-gap from npm, run:

```
$ npm install -g generator-b-gap
```

Finally, initiate the generator:

```
$ yo b-gap
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## b-gap


### example of run of the box

after doing:

```
$ yo b-gap
```

see your project on the web
```
$ grunt server
```

get files into production into phonegap path
```
$ grunt server:dist
```