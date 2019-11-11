#!/bin/bash
      # Helper script for Gradle to call npm on macOS in case it is not found
      export PATH=$PATH:/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/Bharath/Desktop/Project/glucoseapp/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/Bharath/Desktop/Project/glucoseapp/node_modules/.bin:/Users/Bharath/opt/anaconda3/bin:/Users/Bharath/opt/anaconda3/condabin:/Library/Frameworks/Python.framework/Versions/3.7/bin:/Library/Frameworks/Python.framework/Versions/3.7/bin:/anaconda3/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
      npm $@
    