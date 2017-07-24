import {defineTest} from 'jscodeshift/dist/testUtils'

const tests = [
  'basic-case',
  'different-names',
]

describe('require-lib-func-to-import-func-from-lib', () => {
  tests.forEach(test => {
    defineTest(
      __dirname,
      'require-lib-func-to-import-func-from-lib',
      null,
      `require-lib-func-to-import-func-from-lib/${test}`
    )
  })
})
