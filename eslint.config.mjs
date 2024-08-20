import { ntnyq } from '@ntnyq/eslint-config'

export default ntnyq(
  {},
  {
    files: ['**/types.ts', '**/*.d.ts'],
    rules: {
      'no-use-before-define': 'off',
    },
  },
)
