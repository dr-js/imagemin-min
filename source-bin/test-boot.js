#!/usr/bin/env node

const { configBufferProcessorAsync } = require('../library/index.js')

configBufferProcessorAsync().then(
  () => console.log('[test-boot] pass'),
  (error) => {
    console.error('[test-boot]', error)
    process.exitCode = 1
  }
)
