
(function (global) {
      System.config({
        paths: {
          // paths serve as alias
          'libs:': 'libs/',
        },

        map: {
          app: 'app',
          'brace': 'libs:brace',
          'w3c-blob': 'libs:w3c-blob/index.js',
          'buffer': 'libs:buffer/index.js',
          'base64-js': 'libs:base64-js/index.js',
          'ieee754': 'libs:ieee754/index.js',

          // angular bundles
          '@angular/core': 'libs:@angular/core/bundles/core.umd.js',
          '@angular/common': 'libs:@angular/common/bundles/common.umd.js',
          '@angular/compiler': 'libs:@angular/compiler/bundles/compiler.umd.js',
          '@angular/platform-browser': 'libs:@angular/platform-browser/bundles/platform-browser.umd.js',
          '@angular/platform-browser-dynamic': 'libs:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
          '@angular/http': 'libs:@angular/http/bundles/http.umd.js',
          '@angular/router': 'libs:@angular/router/bundles/router.umd.js',
          '@angular/forms': 'libs:@angular/forms/bundles/forms.umd.js',
          
          // other libraries
          'rxjs':                       'libs:rxjs',
          'angular-in-memory-web-api':  'libs:angular-in-memory-web-api',
          'socket.io-client':           'libs:socket.io-client/socket.io.js',
          'angular2-jwt':               'libs:angular2-jwt',
          'honeyloops':                 'libs:honeyloops',
          'mat4':                       'libs:gl-matrix/src/gl-matrix/mat4.js',
          'three':                      'libs:three'
          
          
        },
        packages: {
          app: {
            main: './main.js',
            defaultExtension: 'js'
          },
          brace: {
            main: './index.js',
            defaultExtension: 'js'
          },
          rxjs: {
            defaultExtension: 'js'
          },
          honeyloops: {
            main: './honeyloops.js',
            defaultExtension: 'js'
          },
          three: {
            main: './build/three.js',
            defaultExtension: 'js'
          },
          'socket.io-client': {
            defaultExtension: 'js'
          },
          'angular2-jwt': {
            main: './angular2-jwt.js',
            defaultExtension: 'js'
          },
          'angular-in-memory-web-api': {
            main: './index.js',
            defaultExtension: 'js'
          },
          /*'gl-matrix': {
            main: './src/gl-matrix.js',
            defaultExtension: 'js'
          }*/
        }
        

      });


      //System.import('app/bootstrap').then(null, console.error.bind(console));

})(this);