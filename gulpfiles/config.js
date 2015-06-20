var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        development + '/**/*.html',
        developmentAssets + '/css/*.css',
        developmentAssets + '/images/**'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },

  delete: {
    src: [build]
  },

  sass: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../../assets/scss'
    }
  },

  html: {
    development: {
      src:  [
        src + '/**/*.html'
      ],
      dest: development
    },
    production: {
      src:  [
        src + '/**/*.html'
      ],
      dest: production
    }
  },

  inlinesource: {
    production: {
      compress: true,
      src: production + '/**/*.html',
      dest: production
    }
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },

  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },

  watch: {
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: [],
    images: srcAssets + '/images/**/*.{jpg,png}',
    html: src + '/**/*.html'
  },

  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    }
  },

  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },

  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,json,css}'
    ],
    dest: production
  }
};
