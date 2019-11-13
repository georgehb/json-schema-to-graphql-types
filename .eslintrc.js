/* eslint-env node */
module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:security/recommended",
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread" : true
		}
	},
	"plugins": [
		"security",
		"jsdoc",
		"babel",
		//"graphql",
	],
	"env" : {
		"es6" : true
	},
	"rules": {
		"for-direction" : 2,
		"getter-return" : 2,
		"no-await-in-loop" : 2,
		"no-compare-neg-zero" : 2,
		"no-cond-assign" : 2,
		"no-console" : 0,
		"no-constant-condition" : 2,
		"no-control-regex" : 2,
		"no-debugger" : 2,
		"no-dupe-args" : 2,
		"no-dupe-keys"  : 2,
		"no-duplicate-case" : 2,
		"no-empty" : 2,
		"no-empty-character-class" : 2,
		"no-ex-assign" : 2,
		"no-extra-boolean-cast" : 2,
		"no-extra-semi" : 2,
		"no-func-assign" : 2,
		"no-inner-declarations" : 2,
		"no-invalid-regexp" : 2,
		"no-irregular-whitespace" : 2,
		"no-obj-calls" : 2,
		"no-prototype-builtins" : 2,
		"no-regex-spaces" : 2,
		"no-sparse-arrays" : 2,
		"no-template-curly-in-string" : 2,
		"no-unexpected-multiline" : 2,
		"no-unreachable" : 2,
		"no-unsafe-finally" : 2,
		"no-unsafe-negation" : 2,
		"use-isnan" : 2,
		"valid-jsdoc" : 0,
		"valid-typeof" : 0,
		"accessor-pairs" : 2,
		"array-callback-return" : 2,
		"block-scoped-var" : 2,
		"complexity" : 0,
		"consistent-return" : 0,
		"curly": [2, "multi-line", "consistent"],
		"default-case" : 2,
		"dot-location" : [2, "property"],
		"dot-notation" : 0,
		"eqeqeq" : 2,
		"guard-for-in" : 2,
		"no-alert" : 2,
		"no-caller" : 2,
		"no-case-declarations" : 2,
		"no-div-regex" : 2,
		"no-else-return" : 0,
		"no-empty-function" : 2,
		"no-empty-pattern" : 2,
		"no-eq-null" : 2,
		"no-eval" : 2,
		"no-extend-native" : 2,
		"no-extra-bind" : 2,
		"no-extra-label" : 2,
		"no-fallthrough" : 2,
		"no-floating-decimal" : 2,
		"no-global-assign" : 2,
		"no-implicit-coercion" : 2,
		"no-implicit-globals" : 2,
		"no-implied-eval" : 2,
		"no-invalid-this" : 0,
		"no-iterator" : 2,
		"no-labels" : 2,
		"no-lone-blocks" : 2,
		"no-loop-func" : 2,
		"no-magic-numbers" : [2, { "ignore": [-1, 0, 1, 2, 100] }],
		"no-multi-spaces" : [2, {"ignoreEOLComments" : true}],
		"no-multi-str" : 2,
		"no-new" : 2,
		"no-new-func" : 2,
		"no-new-wrappers" : 2,
		"no-octal" : 2,
		"no-octal-escape" : 2,
		"no-param-reassign" : 2,
		"no-proto" : 2,
		"no-redeclare" : 2,
		"no-restricted-properties" : [2, {"object":"_","property":"extends"}, {"object":"$","property":"extends"}, {"object":"jQuery","property":"extends"}],
		"no-return-assign" : 2,
		"no-return-await" : 2,
		"no-script-url" : 2,
		"no-self-assign" : 2,
		"no-self-compare" : 2,
		"no-sequences" : 2,
		"no-throw-literal" : 2,
		"no-unmodified-loop-condition" : 2,
		"no-unused-expressions" : 0,
		"no-unused-labels" : 2,
		"no-useless-call" : 2,
		"no-useless-concat" : 2,
		"no-useless-escape" : 2,
		"no-useless-return" : 2,
		"no-void" : 2,
		"no-warning-comments" : 0,
		"no-with" : 2,
		"prefer-promise-reject-errors" : 2,
		"radix" : 2,
		"require-await" : 2,
		"vars-on-top" : 0,
		"wrap-iife" : 2,
		"yoda" : [2, "never", {"exceptRange":true}],
		"strict" : [2, "function"],
		"init-declarations" : 0,
		"no-catch-shadow" : 2,
		"no-delete-var" : 2,
		"no-label-var" : 2,
		"no-restricted-globals" : 0,
		"no-shadow" : ["error", {"allow" : ["err", "resolve", "reject"]}],
		"no-shadow-restricted-names" : 2,
		"no-undef" : 2,
		"no-undef-init" : 2,
		"no-undefined" : 2,
		"no-unused-vars" : ["error", { "argsIgnorePattern": "^(req|res|_)$" }],
		"no-use-before-define" : [2, { "functions": false }],
		"callback-return" : 2,
		"global-require" : 2,
		"handle-callback-err" : 2,
		"no-buffer-constructor" : 2,
		"no-mixed-requires" : 2,
		"no-new-require" : 2,
		"no-path-concat" : 2,
		"no-process-env" : 2,
		"no-process-exit" : 2,
		"no-restricted-modules" : 0,
		"no-sync" : 2,
		"array-bracket-newline": [2, "consistent"],
		"array-bracket-spacing" : 2,
		"array-element-newline": [2, "consistent"],
		"block-spacing" : 2,
		"brace-style" : 2,
		"camelcase" : 0,
		"capitalized-comments" : 0,
		"comma-dangle" : [2, "always-multiline"],
		"comma-spacing" : [2, {"before" : false, "after" : true}],
		"comma-style" : 2,
		"computed-property-spacing" : 2,
		"consistent-this" : 2,
		"eol-last" : 2,
		"func-call-spacing" : 2,
		"func-name-matching" : 0,
		"func-names" : 0,
		"func-style" : 0,
		"function-paren-newline" : [2, "multiline"],
		"id-blacklist" : 0,
		"id-length" : 0,
		"id-match" : 0,
		"implicit-arrow-linebreak" : 2,
		"indent" : [2, "tab", { "SwitchCase": 1 }],
		"jsx-quotes" : 2,
		"key-spacing" : [2, {"beforeColon":true,"afterColon":true}],
		"keyword-spacing" : [2, {"before":true,"after":true}],
		"line-comment-position" : 0,
		"linebreak-style" : 2,
		"lines-around-comment" : 0,
		"lines-between-class-members" : [2, "never"],
		"max-depth" : 2,
		"max-len" : 0,
		"max-lines" : 0,
		"max-nested-callbacks" : 2,
		"max-params" : [2, {"max" : 5}],
		"max-statements" : 0,
		"max-statements-per-line" : 2,
		"multiline-comment-style" : 2,
		"multiline-ternary" : [2, "never"],
		"new-cap" : 0,
		"new-parens" : 2,
		"newline-per-chained-call" : [0, { "ignoreChainWithDepth": 3 }],
		"no-array-constructor" : 2,
		"no-bitwise" : 2,
		"no-continue" : 0,
		"no-inline-comments" : 0,
		"no-lonely-if" : 2,
		"no-mixed-operators" : 0,
		"no-mixed-spaces-and-tabs" : 2,
		"no-multi-assign" : 2,
		"no-multiple-empty-lines" : 0,
		"no-negated-condition" : 2,
		"no-nested-ternary" : 2,
		"no-new-object" : 2,
		"no-plusplus" : 0,
		"no-restricted-syntax" : 0,
		"no-tabs" : 0,
		"no-ternary" : 0,
		"no-trailing-spaces" : 2,
		"no-underscore-dangle" : 0,
		"no-unneeded-ternary" : 2,
		"no-whitespace-before-property" : 2,
		"nonblock-statement-body-position" : 2,
		"object-curly-newline" : [2, {"multiline" : true, "consistent":true}],
		"object-curly-spacing" : 0,
		"object-property-newline" : 0,
		"one-var" : [2, "never"],
		"one-var-declaration-per-line" : 0,
		"operator-assignment" : 2,
		"operator-linebreak" : [2, "before"],
		"padded-blocks" : 0,
		"padding-line-between-statements" : 0,
		"quote-props" : 2,
		"quotes" : 0,
		"require-jsdoc" : 0,
		"semi" : 0,
		"semi-spacing" : 2,
		"semi-style" : [2, "first"],
		"sort-keys" : 0,
		"sort-vars" : 0,
		"space-before-blocks" : 2,
		"space-before-function-paren" : [2, "never"],
		"space-in-parens" : [2, "never"],
		"space-infix-ops" : 2,
		"space-unary-ops" : [2, {"words":true,"nonwords":false}],
		"spaced-comment" : 2,
		"switch-colon-spacing" : 2,
		"template-tag-spacing" : 2,
		"unicode-bom" : 2,
		"wrap-regex" : 0,
		"arrow-body-style" : 2,
		"arrow-parens" : 2,
		"arrow-spacing" : 2,
		"constructor-super" : 2,
		"generator-star-spacing" : 2,
		"no-class-assign" : 2,
		"no-confusing-arrow" : [2, {"allowParens": true}],
		"no-const-assign" : 2,
		"no-dupe-class-members" : 2,
		"no-duplicate-imports" : 2,
		"no-new-symbol" : 2,
		"no-restricted-imports" : 0,
		"no-this-before-super" : 2,
		"no-useless-computed-key" : 2,
		"no-useless-constructor" : 2,
		"no-useless-rename" : 2,
		"no-var" : 2,
		"object-shorthand" : 0,
		"prefer-arrow-callback" : 0,
		"prefer-const" : 2,
		"prefer-destructuring" : 0,
		"prefer-numeric-literals" : 0,
		"prefer-rest-params" : 0,
		"prefer-spread" : 0,
		"prefer-template" : 0,
		"require-yield" : 2,
		"rest-spread-spacing" : 2,
		"sort-imports" : 0,
		"symbol-description" : 2,
		"template-curly-spacing" : 2,
		"yield-star-spacing" : 1,

		"security/detect-object-injection" : 0,

		"jsdoc/check-alignment": 2,
		"jsdoc/check-examples": 2,
		"jsdoc/check-indentation": 2,
		"jsdoc/check-param-names": 2,
		"jsdoc/check-syntax": 2,
		"jsdoc/check-tag-names": 2,
		"jsdoc/check-types": 2,
		"jsdoc/newline-after-description": [2, "never"],
		"jsdoc/no-undefined-types": 2,
		"jsdoc/require-description": 0,
		"jsdoc/require-description-complete-sentence": 2,
		"jsdoc/require-example": 0,
		"jsdoc/require-hyphen-before-param-description": 2,
		"jsdoc/require-param": 2,
		"jsdoc/require-param-description": 2,
		"jsdoc/require-param-name": 2,
		"jsdoc/require-param-type": 2,
		"jsdoc/require-returns": 2,
		"jsdoc/require-returns-check": 2,
		"jsdoc/require-returns-description": 2,
		"jsdoc/require-returns-type": 2,
		"jsdoc/valid-types": 2,

		// "graphql/template-strings": [2, { env: 'apollo' }],

		"babel/new-cap": 2,
		"babel/camelcase": 2,
		"babel/no-invalid-this": 2,
		"babel/object-curly-spacing": 2,
		"babel/quotes": 2,
		"babel/semi": [2, "never"],
		"babel/no-unused-expressions": 2,
		"babel/valid-typeof": 2
	}
}
