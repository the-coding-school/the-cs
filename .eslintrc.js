module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': [
    'airbnb'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'import'
  ],
  'rules': {
    'comma-dangle': [
      'error',
      'never'
    ],
    'global-require': [ 1 ],
    'indent': [
      'error',
      2
    ],
    'jsx-quotes': [0],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'max-len': [
      'error',
      {
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],

    // React rules
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [ '.js', '.jsx']
      }
    ],
    'react/require-default-props': [
      1
    ],
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/require-default-props': [0],

    // JSX-a11y rules
    'jsx-a11y/href-no-hash': [0],

    // Import rules
    'import/no-dynamic-require': 1

  },
  'settings': {
    'import/resolver': {
      'node': {
        paths: [
          './src'
        ]
      }
    }
  }
};
