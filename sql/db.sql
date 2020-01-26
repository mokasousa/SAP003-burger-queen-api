CREATE TABLE IF NOT EXISTS orders(
    id           SERIAL    PRIMARY KEY,
    table        SMALLINT  NOT NULL,
    status_order CHAR(255) NOT NULL,
    created_at   TIMESTAMP DEFAULT NOW()
    updated_at   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products(
    id         SERIAL    PRIMARY KEY,
    name       CHAR(255) NOT NULL,
    breakfast  BOOLEAN   NOT NULL,
    price      DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS items(
    id           SERIAL    PRIMARY KEY,
    products_id  INTEGER   REFERENCES products(id)
    order_id     INTEGER   REFERENCES orders(id)
    status_item  CHAR(255) NOT NULL,
    created_at   TIMESTAMP DEFAULT NOW()
    updated_at   TIMESTAMP DEFAULT NOW()
);

INSERT INTO orders(table, status)
    VALUES(1, 'Pendente');

INSERT INTO products(name, breakfast, price)
    VALUES('Café Americano', TRUE, 5);

INSERT INTO items(products_id, order_id, status_item)
    VALUES(792y52873058240589i, 39y492736ejfn59283740, 'Pendente');