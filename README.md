# rndflo-com




# Deploy
https://flocms.herokuapp.com/


# Repo

https://github.com/rndflo/flocms is the current repo


//------------------------------------------------------------------------------------------------------------------------------------

==> nvm install v9.11.1
v9.11.1 is already installed.
Now using node v9.11.1 (npm v5.8.0)
//------------------------------------------------------------------------------------------------------------------------------------

==> npm install -g sails


//------------------------------------------------------------------------------------------------------------------------------------
Use postgresql for development DB


==> npm install sails-postgresql --save --save-exact

==> heroku addons:create heroku-postgresql:hobby-dev

Add 
var url = require('url').parse(process.env.HEROKU_POSTGRESQL_SILVER_URL);

before module.exports 

and

      host: url.host,
      user: url.auth.split(':')[0],
      password: url.auth.split(':')[1],
      database: url.pathname.substring(1),
      port: url.port,
      ssl: true,
      adapter: 'sails-postgresql'

inside to configure for PROD in config/env/production.js



//------------------------------------------------------------------------------------------------------------------------------------
Use mysql for development DB

==> npm install sails-mysql --save --save-exact

Add in config/datastores.js for DEV env : 

    adapter: 'sails-mysql',
    url: 'mysql://admin:adminF00b4r@host:3306/rndflo_com_dev_db',

//------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------
a [Sails v1](https://sailsjs.com) application


### Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Apr 19 2018 17:49:36 GMT-0400 (EDT) using Sails v1.0.1.

<!-- Internally, Sails used [`sails-generate@1.15.21`](https://github.com/balderdashy/sails-generate/tree/v1.15.21/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

