CREATE TABLE IF NOT EXISTS orders(
    id         SERIAL    PRIMARY KEY,
    client     CHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products(
    id         SERIAL    PRIMARY KEY,
    name       CHAR(255) NOT NULL,
    breakfast  BOOLEAN   NOT NULL,
    price      DECIMAL(10,2) NOT NULL,
    extra?
    option?
);

CREATE TABLE IF NOT EXISTS tables(
    id         SERIAL    PRIMARY KEY,
);