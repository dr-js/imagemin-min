#!/usr/bin/env node

const { configBufferProcessorAsync } = require('../library/index.js')

configBufferProcessorAsync().then(
  () => console.log('test boot success'),
  (error) => {
    console.error('test boot error:', error)
    process.exitCode = 1
  }
)
