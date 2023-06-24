module.exports = {
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest'
    },
    moduleNameMapper: {
        axios: 'axios/dist/node/axios.cjs'
    }
    // ...the rest of your config
}
