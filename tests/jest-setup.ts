jest.mock('@src/config/logger');

console.log = jest.fn();

process.env = {
  HOST: 'localhost',
  PORT: '3000',
  NODE_ENV: 'local',
  SERVICE_NAME: 'mock-service-name',
  POSTGRES_DATABASE: 'mock-db',
  POSTGRES_USERNAME: 'admin',
  POSTGRES_PASSWORD: 'admin',
  POSTGRES_HOST: 'postgres',
  JWT_SECRET: 'mock-secret',
  JWT_EXPIRED_TIME: '1h',
  REDIS_HOST: 'locahost',
  REDIS_PORT: '6379',
};
