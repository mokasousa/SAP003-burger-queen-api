-- Tables Created:

-- CREATE TABLE IF NOT EXISTS orders(
--     id           SERIAL    PRIMARY KEY,
--     table_id     INTEGER   REFERENCES tables(id),
--     status_order CHAR(255) NOT NULL,
--     created_at   TIMESTAMP DEFAULT NOW()
--     updated_at   TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE IF NOT EXISTS products(
--     id         SERIAL    PRIMARY KEY,
--     name       CHAR(255) NOT NULL,
--     breakfast  BOOLEAN   NOT NULL,
--     price      DECIMAL(10,2) NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW(),
--     updated_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE IF NOT EXISTS items(
--     id           SERIAL    PRIMARY KEY,
--     products_id  INTEGER   REFERENCES products(id),
--     order_id     INTEGER   REFERENCES orders(id),
--     status_item  CHAR(255) NOT NULL,
--     created_at   TIMESTAMP DEFAULT NOW(),
--     updated_at   TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE IF NOT EXISTS tables(
--     id              SERIAL      PRIMARY KEY,
--     client          CHAR(255)    NOT NULL
--     table_number    INTEGER     NOT NULL,
--     isFree          BOOLEAN     NOT NULL
--     created_at      TIMESTAMP   DEFAULT NOW(),
--     updated_at      TIMESTAMP   DEFAULT NOW()
-- );