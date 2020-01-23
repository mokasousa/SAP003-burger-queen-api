CREATE TABLE IF NOT EXISTS publishers(
    id         SERIAL    PRIMARY KEY,
    name       CHAR(255) NOT NULL,
    address    CHAR(255) NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS authors(
    id         SERIAL    PRIMARY KEY,
    name       CHAR(255) NOT NULL,
    is_alive    BOOLEAN   NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    publisher_id INTEGER REFERENCES publishers(id)
);

INSERT INTO authors(name, is_alive)
    VALUES('Mia Couto', TRUE);

INSERT INTO authors(name, is_alive)
    VALUES('Chimamanda', TRUE);

INSERT INTO authors(name, is_alive)
    VALUES('Gabriel Garcia Marques', FALSE);

INSERT INTO publishers(name, address)
    VALUES('Rocco', 'Avenida Paulista, 2000');

INSERT INTO publishers(name, address)
    VALUES('Usp', 'Avenida do universitário, 2000');

-- CREATE TABLE IF NOT EXISTS orders(
--     id         SERIAL    PRIMARY KEY,
--     client     CHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE IF NOT EXISTS products(
--     id         SERIAL    PRIMARY KEY,
--     name       CHAR(255) NOT NULL,
--     breakfast  BOOLEAN   NOT NULL,
--     price      DECIMAL(10,2) NOT NULL,
--     extra?
--     option?
-- );

-- CREATE TABLE IF NOT EXISTS tables(
--     id         SERIAL    PRIMARY KEY,



-- );

-- INSERT INTO orders()
--     VALUES();

-- INSERT INTO products()
--     VALUES();

-- INSERT INTO tables()
--     VALUES();