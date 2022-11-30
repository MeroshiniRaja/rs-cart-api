const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;

export const dbOptions = {
  user: 'postgres',
  host: 'rds-cloud-x-rs-cart-app.cajtmuj8ep1n.us-east-1.rds.amazonaws.com',
  database: 'cloud_x_123',
  password: 'postgres',
  port: Number(5432)
};
