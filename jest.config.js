module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    coverageReporters: ["html"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx}"
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
}; 