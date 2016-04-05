# mobile-auth-widget

user signin/signup widget for hybrid mobile apps. built specifically for ionic framework, but portable.


## getting started

start by installing ionic and the ionic toolchain:

```bash
$ npm install -g ionic
```

clone this repo and navigate into it

```bash
$ git clone https://github.com/jmknoll/mobile-auth-widget.git
$ cd mobile-auth-widget
```

install all dependencies:

```bash
$ npm install && bower install
```

and run the app

```bash
$ ionic serve
```

## usage

there are two ways of using this application:

1) simply clone the repo to use a starter for a new ionic project

or, more likely

2) use the UI elements in an existing ionic app, or in any other hybrid mobile / web application.

all UI elements are vanilla HTML/CSS, and thus highly portable. To move to a new application, simply pay attention to the contents of the follow files:

templates/login.html - main template
scss/***.scss - sass files

if you don't want to use sass, simply run the application, and you can find the compiled css at the bottom of www/css/ionic.app.css

that's it!

The only caveat worth mentioning is that the keyframe animations in scss/animations.scss rely on angular's ng-hide class. If you want to use this UI widget without angular, you'll have to manually add/remove the ng-hide class. With jQuery, something like this:

```
$(#showSignin).click(function(){
    $(.signup-form).addClass('ng-hide');
    $(.signin-form).removeClass('ng-hide');
});
$(#showSignup).click(function(){
    $(.signin-form).addClass('ng-hide');
    $(.signup-form).removeClass('ng-hide');
});
```

## contributing

if you'd like to make any improvements to this repo, please send me a message and/or open a pull request with your desired changes

