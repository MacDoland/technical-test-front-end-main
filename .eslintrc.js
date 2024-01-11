module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": ["node_modules", "**/*.spec.tsx"],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "react/function-component-definition": [2, {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function"
        }],
        "import/extensions": "off",
        "import/no-unresolved": "off"
    }
}
